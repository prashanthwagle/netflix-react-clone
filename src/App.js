import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, SignIn, SignUp, Browse } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {
  const user = {};
  return (
    <Router>
      <IsUserRedirect
        user={user}
        path={ROUTES.SIGN_IN}
        loggedInPath={ROUTES.BROWSE}
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        path={ROUTES.SIGN_UP}
        loggedInPath={ROUTES.BROWSE}
      >
        <SignUp />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
      <Route exact path="/test">
        <p>Testing....123</p>
      </Route>
    </Router>
  );
}
