import React from "react";
import { Redirect, Route } from "react-router-dom";
import useGlobal from "../../platform/store";

const PrivateRoute = ({ component: Component, privateRoute, ...rest }) => {
  const [{isAuthenticated}] = useGlobal();
  
  return (
    <Route
      {...rest}
      render={(props) =>
        privateRoute && !isAuthenticated ? (
          <Redirect
            to={{ pathname: "/home", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.defaultProps = {
  privateRoute: false,
};

export default PrivateRoute;
