import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { logout } from "@/services/auth";

export const useLogoutModal = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.setItem("token", "");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      router.push("/");
    },
    onError: (error) => {
      throw error;
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return {
    handleLogout,
  };
};
