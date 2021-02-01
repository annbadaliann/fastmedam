import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import { to, routes } from "./platform/constants/routes";
import Layout from "./components/layout/Layout";

import "./assets/styles/index.scss";
import { NotificationContainer } from "react-notifications";
import useGlobal from "./platform/store";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  const [generalAPILoaded, setGeneralAPILoaded] = useState(false);

  useEffect(() => {
    //? For SSR to fully load Browser API (general for 'window')
    window.routerHistory = createBrowserHistory();
    setGeneralAPILoaded(true);
  });

  const [{ isAuthenticated }, { getUserDetails }] = useGlobal();

  const getInitialData = useCallback(() => {
    Promise.all([getUserDetails()]);
  }, [getUserDetails]);

  useEffect(() => {
    if (isAuthenticated) {
      getInitialData();
    }
  }, [getInitialData, isAuthenticated]);

  return generalAPILoaded ? (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((item, i) => (
            <PrivateRoute
              key={i}
              exact={item.exact}
              component={item.component}
              path={item.path}
              privateRoute={item.privateRoute}
            />
          ))}
          <Redirect to={to.home} />
        </Switch>
        <NotificationContainer />
      </Layout>
    </BrowserRouter>
  ) : null;
};

export default App;
