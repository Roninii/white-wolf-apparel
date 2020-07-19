import React from "react";

import "./sign-in.scss";
import BaseInput from "../base/input/base-input";
import BaseButton from "../base/button/base-button";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <article className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <BaseInput
            id="email"
            type="email"
            name="email"
            required
            value={email}
            handleChange={this.handleChange}
            label="email"
          />

          <BaseInput
            id="password"
            type="password"
            name="password"
            required
            value={password}
            handleChange={this.handleChange}
            label="password"
          />

          <BaseButton type="submit" value="Submit">
            Sign In
          </BaseButton>
        </form>
      </article>
    );
  }
}
