import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { ProductForm } from "./components/ProductForm";
import { ProductsList } from "./components/ProductsList";
import { ProductView } from "./components/ProductView";
import { productReducer } from "./state/reducers";

const store = createStore(productReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ul>
          <li>
            <Link to="/products">Products List</Link>
          </li>
          <li>
            <Link to="/products/create">Create Product</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/products/preview">
            <ProductsList />
          </Route>
          <Route exact path="/products">
            <ProductsList />
          </Route>
          <Route exact path="/products/create">
            <ProductForm />
          </Route>
          <Route path="/products/:id/edit">
            <ProductForm></ProductForm>
          </Route>
          <Route path="/products/:id">
            <ProductView></ProductView>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
