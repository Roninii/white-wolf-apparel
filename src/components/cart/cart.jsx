import React from "react";
import { connect } from "react-redux";

import "./cart.scss";
import BaseButton from "../base/button/base-button";
import CartItem from "../cart-item/cart-item";

const Cart = ({ cartItems }) => (
  <aside className="cart-dropdown">
    <section className="cart-items">
      <ul className="item-list">
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </section>
    <BaseButton>Go To Checkout</BaseButton>
  </aside>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Cart);
