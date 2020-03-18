export interface Product {
  name: string;
  ean: string;
  type: string;
  weight: number;
  color: string;
  active: boolean;
  quantity: number;
  price: number;
  quantityHistory: number[];
  priceHistory: number[];
}

export function getList(): Product[] {
  try {
    return JSON.parse(window.localStorage.getItem("ProductList") || "[]");
  } catch (error) {
    console.error(error);
  }
  return [];
}

export function saveList(list: Product[]): void {
  window.localStorage.setItem("ProductList", JSON.stringify(list));
}
