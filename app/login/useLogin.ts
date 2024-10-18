import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

interface LoginFormInputs {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { user, handleLogin } = useAuth();
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>();

  const { theme } = useTheme();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const [errorMessage, setErrorMessage] = useState<string | null>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      setErrorMessage(null);
      handleLogin(data.email, data.password);
    } catch (error) {
      setErrorMessage("Falha ao realizar login. Verifique suas credenciais.");
    }
  };

  return { theme, onSubmit, register, formState, handleSubmit };
};
