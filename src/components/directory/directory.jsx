import React from "react";

import "./directory.scss";

import MenuItem from "../menu-item/menu-item";

const Directory = ({ directories }) => (
  <div className="directory-menu">
    {directories.map((dir, i) => (
      <MenuItem title={dir} key={i} />
    ))}
  </div>
);

export default Directory;
