import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import "./ProductsForm.scss";

import { State } from "../state/reducers";
import { addProduct, updateProduct } from "../state/actions";

export const ProductForm: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(
    useSelector((state: State) =>
      id !== undefined
        ? state.products[parseInt(id)]
        : {
            name: "",
            active: true,
            color: "",
            ean: "",
            price: 0,
            priceHistory: [],
            quantity: 0,
            quantityHistory: [],
            type: "",
            weight: 0
          }
    )
  );

  return (
    <Container className="product-form">
      <Card>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={product && product.name}
              onChange={(event: any) =>
                setProduct({
                  ...product,
                  name: event.target.value
                })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={product.type}
              onChange={(event: any) =>
                setProduct({
                  ...product,
                  type: event.target.value
                })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              value={product.color}
              onChange={(event: any) =>
                setProduct({
                  ...product,
                  color: event.target.value
                })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Bar Code</Form.Label>
            <Form.Control
              type="text"
              value={product.ean}
              onChange={(event: any) =>
                setProduct({
                  ...product,
                  ean: event.target.value
                })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={"" + product.weight}
              onChange={(event: any) => {
                const newValue = parseFloat(event.target.value);
                setProduct({
                  ...product,
                  weight: newValue >= 0 ? newValue : product.weight
                });
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={"" + product.quantity}
              onChange={(event: any) => {
                const newValue = parseFloat(event.target.value);
                setProduct({
                  ...product,
                  quantity: newValue >= 0 ? newValue : product.quantity
                });
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={"" + product.price}
              onChange={(event: any) => {
                const newValue = parseFloat(event.target.value);
                setProduct({
                  ...product,
                  price: newValue >= 0 ? newValue : product.price
                });
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={() => {
              history.push("/products");
              if (id) {
                dispatch(updateProduct(parseInt(id), product));
                return;
              }
              dispatch(addProduct(product));
            }}
          >
            SUBMIT
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
