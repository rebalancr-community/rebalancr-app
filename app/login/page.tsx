"use client";

import { Button, Input } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="px-16 container">
      <NextLink href={"/"}>
        <div className="w-1/4 mb-10">
          <Image
            alt="login background"
            className="object-cover w-full h-full"
            height={500}
            src="/assets/logo-white-bg.png"
            width={500}
          />
        </div>
      </NextLink>
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
        <div className="flex flex-col gap-4 items-center text-center">
          <Input
            className="opacity-95"
            label="Email"
            placeholder="Insira seu email"
            type="email"
          />
          <Input
            className="opacity-95"
            label="Senha"
            placeholder="Insira sua senha"
            type="password"
          />
          <Button
            className="bg-purple-600 text-white shadow-lg w-full"
            radius="md"
          >
            Entrar
          </Button>
        </div>
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
