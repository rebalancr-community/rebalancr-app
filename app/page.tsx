"use client";

import { Button } from "@nextui-org/react";
import NextLink from "next/link";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-800">
                Rebalance{" "}
              </span>
              o seu portfolio de investimentos{" "}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              />
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <NextLink href={"/login"}>
                    <Button
                      className="text-white bg-purple-500 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                      href="/login"
                    >
                      Login
                    </Button>
                  </NextLink>
                </div>
                <div>
                  <NextLink href={"/register"}>
                    <Button
                      className="text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                      href="/register"
                    >
                      Cadastre-se
                    </Button>
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
