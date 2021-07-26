/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import Login from "pages/login";
import Register from "pages/register";
import Products from "pages/products";
import SingleProduct from "pages/product";
import Cart from "pages/cart";
import Account from "pages/account";
import Checkout from "pages/checkout";
import Landing from "pages/";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default class Test extends Component {
  render() {

    return (
      <Router>
          <Switch>
    <Route path="/" component={Landing} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/register" component={Register} exact />
    <Route path="/products" component={Products} exact />
    <Route path="/product/:productId" component={SingleProduct} exact />
    <Route path="/cart" component={Cart} exact />
    <Route path="/account" component={Account} exact />
    <Route path="/checkout" component={Checkout} exact />
    {/* <Route
      render={(props)=>(
        <ErrorPage {...props} />
      )}
    /> */}
  </Switch>
      </Router>
    );
  }
}
