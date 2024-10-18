import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { IAsset } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";
import { searchAsset } from "@/services/assets";

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
