import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { AuthContext } from "../auth/AuthContext";
import { Header } from "../components/Header";
import { MonitorRouter } from "./MonitorRouter";
import { ReportsRouter } from "./ReportsRouter";

export const AppRouter = () => {
  //   const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { userAuth } = useContext(AuthContext);

  useEffect(() => {
    const { logged } = userAuth;
    setIsLoggedIn(logged);
  }, [userAuth]);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            path="/reports"
            isAuthenticated={isLoggedIn}
            component={ReportsRouter}
          />

          <PrivateRoute
            path="/monitor"
            isAuthenticated={isLoggedIn}
            component={MonitorRouter}
          />

          {/* <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={SensorsMonitor}
          /> */}

          <Redirect to="/monitor" />
        </Switch>
      </div>
    </Router>
  );
};
