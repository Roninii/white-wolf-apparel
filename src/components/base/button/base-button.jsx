import React from "react";

import "./base-button.scss";

const BaseButton = ({ children, isGoogleSignIn, inverted, ...props }) => (
  <button
    className={`
      ${isGoogleSignIn ? "google-sign-in" : ""}
      ${inverted ? "inverted" : ""}
      base-button
    `}
    {...props}
  >
    {children}
  </button>
);

export default BaseButton;
