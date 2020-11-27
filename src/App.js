import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, SignIn } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path="/test">
        <p>Testing....123</p>
      </Route>
    </Router>
  );
}
