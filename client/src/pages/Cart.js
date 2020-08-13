import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../utils/API";
import Footer from "../components/Footer/index";
import CartCard from "../components/CartCard/CartCard";

class Cart extends Component {
  render() {
    return (
      <>
        <CartCard />
        <Footer />
      </>
    );
  }
}

export default Cart;
