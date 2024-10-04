import { IAsset, IAssetPrice } from "../types";

import axiosInstance from "./config";

export const getAssetPrice = async (symbol: string): Promise<IAssetPrice> => {
  const res = await axiosInstance.get<IAssetPrice>(
    `/assets/price?symbol=${symbol}`,
  );

  return res.data;
};

export const searchAsset = async (query: string): Promise<IAsset[]> => {
  const res = await axiosInstance.get<IAsset[]>(
    `/assets/search?query=${query}`,
  );

  return res.data;
};
