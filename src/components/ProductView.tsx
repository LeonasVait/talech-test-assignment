import React from "react";
import { useParams, useHistory } from "react-router";
import { State } from "../state/reducers";
import { useSelector } from "react-redux";

import "./ProductView.scss";

import { Tabs, Tab, Container, Card, Row, Col } from "react-bootstrap";

export const ProductView: React.FC = () => {
  let { id } = useParams();
  const history = useHistory();

  const product = useSelector((state: State) =>
    id !== undefined ? state.products[parseInt(id)] : undefined
  );

  if (!product) {
    history.push("/products");
    return <></>;
  }

  return (
    <Tabs defaultActiveKey="Preview" id="uncontrolled-tab-example">
      <Tab eventKey="Preview" title="Preview" className="details">
        <Row className="header">
          <Col>
            <b>Product information</b>
          </Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <b>Name</b>
          </Col>
          <Col>{product.name}</Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <b>Category</b>
          </Col>
          <Col>{product.type}</Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <b>Color</b>
          </Col>
          <Col>{product.color}</Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <b>EAN</b>
          </Col>
          <Col>{product.ean}</Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <b>Weight kg</b>
          </Col>
          <Col>{product.weight}</Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <b>Quantity</b>
          </Col>
          <Col>{product.quantity}</Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <b>Price</b>
          </Col>
          <Col>{product.price}</Col>
        </Row>
      </Tab>
      <Tab eventKey="Price History" title="Price History">
        <div>Price History</div>
      </Tab>
      <Tab eventKey="Quantity History" title="Quantity History">
        <div>Quantity History</div>
      </Tab>
    </Tabs>
  );
};
