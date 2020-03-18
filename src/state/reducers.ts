import { Product, ActionType, Action } from "./types";

export interface State {
  products: Product[];
  isEdited: boolean;
}

const initialState: State = {
  isEdited: false,
  products: []
};

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
      try {
        return {
          isEdited: false,
          products: JSON.parse(
            window.localStorage.getItem("ProductList") || "[]"
          )
        };
      } catch (error) {
        console.error(error);
      }
      return {
        isEdited: false,
        products: []
      };

    case ActionType.SAVE_LIST:
      window.localStorage.setItem(
        "ProductList",
        JSON.stringify(state.products)
      );
      return {
        ...state,
        isEdited: false
      };
    default:
      return state;
  }
}
