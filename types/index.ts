export interface IAssetPrice {
  symbol: string;
  price: number;
}

export type AssetType = "STOCK" | "FII" | "REIT" | "CRYPTO";

export interface IAsset {
  symbol: string;
  name: string;
  type: AssetType;
}
