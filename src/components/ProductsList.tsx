import React, { useState } from "react";
import { getList, saveList } from "../services/ProductService";
import { ProductsListEntry } from "./ProductsListEntry";

export const ProductsList: React.FC = () => {
  const [products, setProducts] = useState(getList());

  return (
    <div>
      {products.map((entry, index) => (
        <ProductsListEntry product={entry} key={index}></ProductsListEntry>
      ))}
    </div>
  );
};
