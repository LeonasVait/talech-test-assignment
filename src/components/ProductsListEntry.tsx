import React, { useState } from "react";
import { Product } from "../services/ProductService";

interface Props {
  product: Product;
  key: number;
}

export const ProductsListEntry: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <span>{product.name}</span>
      <span>{product.type}</span>
      <span>{product.quantity}</span>
      <span>{product.weight}</span>
      <span>{product.price}</span>
      <span>{product.color}</span>
      <span>{product.ean}</span>
      <span>{product.active}</span>
    </div>
  );
};
