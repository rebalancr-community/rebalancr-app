"use client";

import { Button, Input } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

import { useLogin } from "./useLogin";

export default function Login() {
  const { theme, onSubmit, register, formState, handleSubmit } = useLogin();

  return (
    <div className="px-16 container">
      <div className="w-1/4 mb-10">
        <NextLink href={"/"}>
          <Image
            alt="login background"
            className="object-cover w-full h-full"
            height={500}
            src={`/assets/logo-${theme !== "dark" ? "white" : "dark"}-bg.png`}
            width={500}
          />
        </NextLink>
      </div>
      <h1 className="text-4xl mb-2 font-semibold">Acesse seu portfolio!</h1>
      <div className="flex flex-col">
        <div className=" relative top-1 flex-col !items-start my-5">
          <p className="text-small text-black/60 uppercase font-bold">
            Faça login
          </p>
          <p className=" font-medium text-small">
            ...para poder configurar o seu portfolio
          </p>
        </div>
        <form
          className="flex flex-col gap-4 items-center text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <Input
              className="opacity-95"
              label="Email"
              placeholder="Insira seu email"
              type="email"
              {...register("email", { required: "Email é obrigatório" })}
            />
            {formState.errors.email && (
              <p className="text-red-500 text-xs">
                {formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <Input
              className="opacity-95"
              label="Senha"
              placeholder="Insira sua senha"
              type="password"
              {...register("password", { required: "Senha é obrigatória" })}
            />
            {formState.errors.password && (
              <p className="text-red-500 text-xs">
                {formState.errors.password.message}
              </p>
            )}
          </div>

          <Button
            className="bg-purple-600 text-white shadow-lg w-full"
            // isDisabled={isLoading}
            radius="md"
            type="submit"
          >
            Entrar
          </Button>
        </form>
        <div className="flex justify-center mt-4">
          <p className="text-tiny font-bold">
            Não tem uma conta?{" "}
            <NextLink href={"/register"}>
              <span className="opacity-100 text-purple-500">Cadastre-se! </span>
            </NextLink>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
