import React, { Component } from "react";
import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";
import mutation from "../mutations/login";

class LoginForm extends Component {
  onSubmit({ email, passwowd }) {
    this.props.mutate({
      variables: { email, passwowd },
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
