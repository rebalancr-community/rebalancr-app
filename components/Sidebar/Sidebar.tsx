import { Divider, Image, useDisclosure } from "@nextui-org/react";
import NextLink from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { LogoutModal } from "../Modals/LogoutModal/LogoutModal";

import { sidebarItems } from "@/constants/sidebar";

export const Sidebar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="fixed flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-black">
      <NextLink className="flex items-center w-full px-3 mt-3" href="#">
        <Image height={40} src="/assets/logo-dark-bg.png" width={40} />
      </NextLink>
      <div className="w-full px-2">
        <Divider className="my-4 bg-gray-700" />
        {sidebarItems.map((item, i) => (
          <NextLink
            key={i}
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
            href="#"
          >
            <Icon icon={item.icon} />
            <span className="ml-2 text-small font-small">{item.label}</span>
          </NextLink>
        ))}
      </div>
      <NextLink
        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
        href="#"
        onClick={onOpen}
      >
        <Icon icon={faRightFromBracket} />
        <span className="ml-2 text-small font-small">Sair</span>
      </NextLink>
      <LogoutModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};
