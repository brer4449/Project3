import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
