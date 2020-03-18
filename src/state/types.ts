export type Product = {
  name: string;
  ean: string;
  type: string;
  weight: number;
  color: string;
  active: boolean;
  quantity: number;
  price: number;
  quantityHistory: HistoryEntry[];
  priceHistory: HistoryEntry[];
};

export interface HistoryEntry {
  time: number;
  value: number;
}

export const HistoryMaxLength = 5;

export enum ActionType {
  ADD_PRODUCT = "ADD_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  GET_LIST = "GET_LIST",
  LOAD_LIST = "LOAD_LIST",
  SAVE_LIST = "SAVE_LIST"
}

export interface Action {
  type: string;
  id?: number;
  value?: Product;
}
