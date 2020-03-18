import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

import "./ProductsList.scss";

import { getList, Product } from "../services/ProductService";
import { ProductsListEntry } from "./ProductsListEntry";
import { useHistory } from "react-router";

export const ProductsList: React.FC = () => {
  const [products, setProducts] = useState(getList());
  const history = useHistory();

  const updateProduct = (id: number, product: Product): void => {
    const updated = products.map((entry, index) =>
      id === index ? product : entry
    );

    setProducts(updated);
  };

  const deleteProduct = (id: number): void => {
    setProducts(products.filter((entry, index) => index !== id));
  };

  return (
    <Table className="list" bordered hover size="sm">
      <thead>
        <th>Name</th>
        <th>Category</th>
        <th>Weight</th>
        <th>Color</th>
        <th>Barcode</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Active</th>
        <th>
          <Button
            variant="primary"
            size="sm"
            style={{ width: "100%" }}
            onClick={() => history.push("/products/create")}
          >
            ADD
          </Button>
        </th>
      </thead>
      <tbody>
        {products.map((entry, index) => (
          <ProductsListEntry
            product={entry}
            id={index}
            key={index}
            onChange={updateProduct}
            onDelete={deleteProduct}
          ></ProductsListEntry>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Button variant="primary" size="sm" style={{ width: "100%" }}>
              SAVE
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
