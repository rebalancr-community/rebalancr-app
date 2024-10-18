import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";

import { useLogoutModal } from "./useLogoutModal";

import { IModal } from "@/types";

export const LogoutModal = ({ isOpen, onOpenChange }: IModal) => {
  const { handleLogout } = useLogoutModal();

  return (
    <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Tem certeza que deseja sair?
            </ModalHeader>
            <ModalFooter>
              <Button color="default" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="danger" onPress={handleLogout}>
                Fazer logout
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
