import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.scss";

const Header = () => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <nav className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      <Link className="option" to="/sign-in">
        Sign In
      </Link>
    </nav>
  </header>
);

export default Header;
