import React from "react";
import { connect } from "react-redux";

import "./collection-item.scss";
import BaseButton from "../base/button/base-button";
import { addItemToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <section className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <footer className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
      <BaseButton inverted onClick={() => addItemToCart(item)}>
        Add To Cart
      </BaseButton>
    </section>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
