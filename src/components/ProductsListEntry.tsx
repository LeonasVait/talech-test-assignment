import React from "react";
import { ButtonGroup, Button, FormControl } from "react-bootstrap";

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { removeProduct, updateProduct } from "../state/actions";
import { State } from "../state/reducers";

interface Props {
  id: number;
}

export const ProductsListEntry: React.FC<Props> = ({ id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state: State) => state.products[id]);

  const isHighlight = product && product.quantity === 0;

  return (
    <tr className={isHighlight ? "highlight" : ""}>
      <td>{product.name}</td>
      <td>{product.type}</td>
      <td>
        <FormControl
          type="number"
          value={"" + product.price}
          onChange={(event: any): void => {
            const newValue = parseFloat(event.target.value);
            dispatch(
              updateProduct(id, {
                ...product,
                price: newValue >= 0 ? newValue : product.price
              })
            );
          }}
          min="0"
          size="sm"
        />
      </td>
      <td>
        {
          <FormControl
            type="number"
            value={"" + product.quantity}
            onChange={(event: any) => {
              const newValue = parseFloat(event.target.value);
              dispatch(
                updateProduct(id, {
                  ...product,
                  quantity: newValue >= 0 ? newValue : product.quantity
                })
              );
            }}
            min="0"
            size="sm"
          />
        }
      </td>
      <td>
        <input
          type="checkbox"
          checked={product.active}
          onChange={() =>
            dispatch(updateProduct(id, { ...product, active: !product.active }))
          }
        ></input>
      </td>
      <td>
        <ButtonGroup size="sm">
          <Button
            variant="secondary"
            onClick={() => history.push(`/products/${id}`)}
          >
            VIEW
          </Button>
          <Button
            variant="secondary"
            onClick={() => history.push(`/products/${id}/edit`)}
          >
            EDIT
          </Button>
          <Button
            variant="secondary"
            onClick={() => dispatch(removeProduct(id))}
          >
            DELETE
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
