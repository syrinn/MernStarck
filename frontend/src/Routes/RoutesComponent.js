import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "./routes";
import CustomLoadable from "./CustomLoadable";

function RoutesComponent() {
  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          exact
          key={route.path}
          path={route.path}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}

      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          component={CustomLoadable({ loader: route.loader })}
          exact={Boolean(route.exact)}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
