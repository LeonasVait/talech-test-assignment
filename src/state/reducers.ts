import { Product, ActionType, Action } from "./types";

export interface State {
  products: Product[];
  isEdited: boolean;
}

const initialState: State = {
  isEdited: false,
  products: []
};

function writePriceHistory(product: Product): void {
  let pHistLength = product.priceHistory.length;
  if (
    pHistLength === 0 ||
    product.priceHistory[pHistLength - 1].value !== product.price
  ) {
    product.priceHistory.push({
      value: product.price,
      time: Date.now()
    });
    while (product.priceHistory.length > 5) {
      product.priceHistory.shift();
    }
  }
}

function writeQuantityHistory(product: Product): void {
  let qHistLength = product.quantityHistory.length;
  if (
    qHistLength === 0 ||
    product.quantityHistory[qHistLength - 1].value !== product.quantity
  ) {
    product.quantityHistory.push({
      value: product.quantity,
      time: Date.now()
    });
    while (product.quantityHistory.length > 5) {
      product.quantityHistory.shift();
    }
  }
}

function loadList(): Product[] {
  try {
    return JSON.parse(window.localStorage.getItem("ProductList") || "[]");
  } catch (error) {
    console.error(error);
  }
  return [];
}

export function productReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      return {
        isEdited: true,
        products: action.value
          ? [...state.products, action.value]
          : state.products
      };

    case ActionType.DELETE_PRODUCT:
      return {
        isEdited: true,
        products: state.products.filter((entry, index) => index !== action.id)
      };

    case ActionType.UPDATE_PRODUCT:
      return {
        isEdited: true,
        products: state.products.map((entry, index) =>
          action.value && index === action.id ? action.value : entry
        )
      };

    case ActionType.LOAD_LIST:
      return {
        isEdited: false,
        products: loadList()
      };

    case ActionType.SAVE_LIST:
      const editedList = state.products.map(entry => {
        writePriceHistory(entry);
        writeQuantityHistory(entry);

        return entry;
      });

      window.localStorage.setItem("ProductList", JSON.stringify(editedList));
      return {
        ...state,
        isEdited: false
      };
    default:
      return state;
  }
}
