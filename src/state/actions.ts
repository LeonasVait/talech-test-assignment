import { Product, ActionType, Action } from "./types";

export function addProduct(newItem: Product): Action {
  return {
    type: ActionType.ADD_PRODUCT,
    value: newItem
  };
}

export function updateProduct(id: number, newItem: Product): Action {
  return {
    id,
    type: ActionType.UPDATE_PRODUCT,
    value: newItem
  };
}

export function removeProduct(id: number): Action {
  return {
    id,
    type: ActionType.DELETE_PRODUCT
  };
}

export function getList(): Action {
  return {
    type: ActionType.GET_LIST
  };
}

export function saveList(): Action {
  return {
    type: ActionType.SAVE_LIST
  };
}

export function loadList(): Action {
  return {
    type: ActionType.LOAD_LIST
  };
}
