import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.scss";

const Header = ({ currentUser }) => (
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
      {currentUser
        ? (
          <button className="option" onClick={() => auth.signOut()}>
            Sign Out
          </button>
        )
        : (
          <Link className="option" to="/sign-in">
            Sign In
          </Link>
        )}
    </nav>
  </header>
);

export default Header;
