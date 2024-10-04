"use client";

import { Button } from "@nextui-org/button";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";

import { PortfolioTable } from "@/components/portfolioTable";
import { AddAssetModal } from "@/components/Modals";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className="flex flex-row p-1 mb-2 justify-between">
        <h2 className="text-2xl font-bold">Meu portfolio</h2>
        <Button color="primary" onPress={onOpen}>
          Adicionar ativo
        </Button>
      </div>

      <PortfolioTable />

      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => <AddAssetModal onClose={onClose} />}
        </ModalContent>
      </Modal>
    </div>
  );
}
