import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/button";
import { ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";

import { useAddAssetModal } from "./useAddAssetModal";

export const AddAssetModal = (onClose: any) => {
  const { assetsSearched, searchQuery, isLoading, handleInputChange } =
    useAddAssetModal();

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Adicionar ativo</ModalHeader>
      <ModalBody>
        <Autocomplete
          isClearable
          isLoading={isLoading}
          items={assetsSearched || []}
          label="eg: AAPL"
          labelPlacement="inside"
          placeholder="Selecione um ativo"
          value={searchQuery}
          variant="bordered"
          onInputChange={handleInputChange}
        >
          {(item) => (
            <AutocompleteItem key={item.symbol}>
              <div className="flex items-center">
                <div className="flex flex-col">
                  <span className="text-small">{item.name}</span>
                  <span className="text-tiny text-default-400">
                    {item.symbol}
                  </span>
                </div>
              </div>
            </AutocompleteItem>
          )}
        </Autocomplete>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onPress={onClose}>
          Adicionar
        </Button>
      </ModalFooter>
    </>
  );
};
