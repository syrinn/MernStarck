import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Layout from "../shared/Layout";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo && userInfo.token) {
          return (
            <Layout {...props}>
              <Component {...props} />
            </Layout>
          );
        }
        return (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
