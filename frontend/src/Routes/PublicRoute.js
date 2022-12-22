import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo && userInfo.token) {
          return <Redirect to='/' />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
