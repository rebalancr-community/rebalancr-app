"use client";

import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";

import { AddAssetModal } from "../Modals";
import Sidebar from "../Sidebar";

import PlatformTable from "./components/PlatformTable";

export const Platform = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Sidebar />
      <div className="ml-40">
        <div className="px-10 py-4">
          <div className="flex flex-row p-1 mb-2 justify-between">
            <h2 className="text-2xl font-bold">Meu portfolio</h2>
            <Button color="primary" onPress={onOpen}>
              Adicionar ativo
            </Button>
          </div>

          <PlatformTable />

          <AddAssetModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
      </div>
    </div>
  );
};
