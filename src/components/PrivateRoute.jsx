import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
  const user = useContext(UserContext);

  debugger;
  return !!user ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};
