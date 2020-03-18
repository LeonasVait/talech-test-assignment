import React from "react";
import { Table, Button, Container } from "react-bootstrap";

import "./ProductsList.scss";

import { State } from "../state/reducers";
import { loadList, saveList } from "../state/actions";
import { ProductsListEntry } from "./ProductsListEntry";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

export const ProductsList: React.FC = () => {
  const products = useSelector((state: State) => state.products);
  const isEdited = useSelector((state: State) => state.isEdited);
  const dispatch = useDispatch();
  const history = useHistory();

  if (products.length === 0 && !isEdited) {
    dispatch(loadList());
  }

  return (
    <Container className="product-list">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
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
          </tr>
        </thead>
        <tbody>
          {products.map((entry, index) => (
            <ProductsListEntry id={index} key={index}></ProductsListEntry>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button
                variant="primary"
                size="sm"
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch(saveList());
                }}
              >
                SAVE
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
