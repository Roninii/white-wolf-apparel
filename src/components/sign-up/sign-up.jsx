import React from "react";

import "./sign-up.scss";
import BaseInput from "../base/input/base-input";
import BaseButton from "../base/button/base-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // make sure the passwords match before continuing
    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    // create user record
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log("There was a problem creating the user.", e);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account.</h2>
        <span>Sign up with your email and password.</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <BaseInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <BaseInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <BaseInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <BaseInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <BaseButton type="submit">Sign Up</BaseButton>
        </form>
      </div>
    );
  }
}
