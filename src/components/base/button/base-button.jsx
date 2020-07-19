import React from "react";

import "./base-button.scss";

const BaseButton = ({ children, isGoogleSignIn, ...props }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} base-button`}
    {...props}
  >
    {children}
  </button>
);

export default BaseButton;
