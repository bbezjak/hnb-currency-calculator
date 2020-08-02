import React from "react";
import "./App.css";
import { CurrencyPage } from "./pages/currency-page";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { UserProvider } from "./providers/UserProvider";
import { PrivateRoute } from "./components";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/">
          <CurrencyPage />
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
      </Switch>
    </BrowserRouter>
    </UserProvider>
    
  );
}

export default App;
