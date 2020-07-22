import React from "react";
import { connect } from "react-redux";

import "./cart.scss";
import BaseButton from "../base/button/base-button";

const Cart = ({ cartItems }) => (
  <aside className="cart-dropdown">
    <section className="cart-items"></section>
    <BaseButton>Go To Checkout</BaseButton>
  </aside>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Cart);
