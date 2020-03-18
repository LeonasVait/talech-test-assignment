import React from "react";
import { ButtonGroup, Button, FormControl } from "react-bootstrap";

import { Product } from "../services/ProductService";
import { useHistory } from "react-router";

interface Props {
  product: Product;
  id: number;
  onChange: (id: number, product: Product) => void;
  onDelete: (id: number) => void;
}

export const ProductsListEntry: React.FC<Props> = ({
  product,
  onChange,
  onDelete,
  id
}) => {
  const history = useHistory();
  const isHighlight = product.quantity === 0;

  return (
    <tr className={isHighlight ? "highlight" : ""}>
      <td>{product.name}</td>
      <td>{product.type}</td>
      <td>{product.weight}</td>
      <td>{product.color}</td>
      <td>{product.ean}</td>
      <td>
        <FormControl
          type="number"
          value={"" + product.price}
          onChange={(event: any): void => {
            const newValue = parseFloat(event.target.value);
            onChange(id, {
              ...product,
              price: newValue >= 0 ? newValue : product.price
            });
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
              onChange(id, {
                ...product,
                quantity: newValue >= 0 ? newValue : product.quantity
              });
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
          onChange={() => onChange(id, { ...product, active: !product.active })}
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
          <Button variant="secondary" onClick={() => onDelete(id)}>
            DELETE
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
