import React from "react";

import "./collection-item.scss";
import BaseButton from "../base/button/base-button";

const CollectionItem = ({ id, name, price, imageUrl }) => (
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
    <BaseButton inverted>Add To Card</BaseButton>
  </section>
);

export default CollectionItem;
