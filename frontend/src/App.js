import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Settings from "./pages/Settings"
import Error from "./pages/Error"
import Recovery from "./pages/Recovery"

function App() {
  const [userIdentity, setUserIdentity] = useState(undefined);
  useEffect(() => {
    fetch("http://127.0.0.1:4433/sessions/whoami", {credentials: "include"})
      .then(response => response.json())
      .then(data => {
        setUserIdentity(data);
      })
  }, []);

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (userIdentity() !== undefined) {
        next();
      }
      next.redirect('/login');
    } else {
      next();
    }
  };

  return (
    <>
      <Router>
        <GuardProvider guards={[requireLogin]} error={Error}>
          <Switch>
            <GuardedRoute path="/dashboard" exact component={Dashboard} meta={{ auth: true }} />
            <GuardedRoute path="/settings" exact component={Settings} meta={{ auth: true }} />
            <GuardedRoute path="/login" exact component={Login} />
            <GuardedRoute path="/register" exact component={Register} />
            <GuardedRoute path="/recovery" exact component={Recovery} />
            <GuardedRoute path="/error" exact component={Error} />
            {userIdentity
              ? <GuardedRoute path="/" exact component={Login} />
              : <GuardedRoute path="/dashboard" exact component={Dashboard} meta={{ auth: true }} />
            }
            <GuardedRoute path="*" exact component={Error} />
          </Switch>
          </GuardProvider>
      </Router>
    </>
  );
}

export default App;
