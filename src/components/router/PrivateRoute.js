import useToken from "../../services/useToken";
import {Redirect, Route} from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children }) => {
  const { token } = useToken();
  return (
      <Route
          render={({ location }) =>
              token ? (
                  children
              ) : (
                  <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location }
                      }}
                  />
              )
          }
      />
  );
}

export default PrivateRoute;
