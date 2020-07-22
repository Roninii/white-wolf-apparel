import React from "react";

import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => (
  <article className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <section className="preview">
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </section>
  </article>
);

export default CollectionPreview;
