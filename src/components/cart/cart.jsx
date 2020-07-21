import React from "react";

import "./cart.scss";
import BaseButton from "../base/button/base-button";

const Cart = () => (
  <aside className="cart-dropdown">
    <section className="cart-items"></section>
    <BaseButton>Go To Checkout</BaseButton>
  </aside>
);

export default Cart;
