import React from "react";

import "./base-input.scss";

const BaseInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input
      id={`${props.name}`}
      className="form-input"
      onChange={handleChange}
      {...props}
    />
    {label
      ? (
        <label
          htmlFor={`${props.name}`}
          className={`${props.value?.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )
      : null}
  </div>
);

export default BaseInput;
