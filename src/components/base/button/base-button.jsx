import React from "react";

import "./base-button.scss";

const BaseButton = ({ children, ...props }) => (
  <button className="base-button" {...props}>
    {children}
  </button>
);

export default BaseButton;
