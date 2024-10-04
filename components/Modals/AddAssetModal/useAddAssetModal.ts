import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { searchAsset } from "@/services";
import { IAsset } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";

export const useAddAssetModal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const {
    data: assetsSearched,
    error,
    isLoading,
  } = useQuery<IAsset[]>({
    queryKey: ["assets", debouncedSearchQuery],
    queryFn: () => searchAsset(debouncedSearchQuery),
    enabled: !!debouncedSearchQuery,
  });

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  return {
    searchQuery,
    setSearchQuery,
    assetsSearched,
    error,
    isLoading,
    handleInputChange,
  };
};
