import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Settings from "./pages/Settings"
import Error from "./pages/Error"
import Recovery from "./pages/Recovery"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/recovery">
            <Recovery />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
