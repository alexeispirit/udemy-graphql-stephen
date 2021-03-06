import React, { Component } from "react";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/currentUser";
import { hashHistory } from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        console.log("here");
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(RequireAuth);
};
