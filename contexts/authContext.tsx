import { createContext } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axiosInstance from "@/services/config";
import { login, register } from "@/services/auth";

interface AuthContextProps {
  user: any | null;
  isLoading: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
  logout: () => void;
  handleRegister: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoading: true,
  handleLogin: async () => {},
  logout: () => {},
  handleRegister: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return null;
      }
      const response = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    enabled: !!localStorage?.getItem("token"),
    retry: false,
  });

  if (error) {
    localStorage.removeItem("token");
  }

  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return login(email, password);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      router.push("/");
    },
    onError: (error) => {
      console.error("Erro ao realizar login:", error);
    },
  });

  const registerMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      register(email, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      router.push("/"); // Redireciona para a página inicial após o cadastro
    },
    onError: (error) => {
      console.error("Erro ao realizar cadastro:", error);
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    queryClient.setQueryData(["authUser"], null);
    axiosInstance.defaults.headers.Authorization = "";
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        handleLogin: async (email, password) =>
          loginMutation.mutateAsync({ email, password }),
        logout,
        handleRegister: async (email, password) =>
          registerMutation.mutateAsync({ email, password }),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
