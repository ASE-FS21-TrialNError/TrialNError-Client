import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppsOverviewGuard } from "../routeProtectors/AppsOverviewGuard";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../Login";
import { RegistrationGuard } from "../routeProtectors/RegistrationGuard";
import Registration from "../../Registration";
import AppsOverview from "../../AppsOverview";


class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/appsOverview"
              render={() => (
                <AppsOverviewGuard>
                  <AppsOverview/>
                </AppsOverviewGuard>
              )}
            />
            <Route
              path="/login"
              exact
              render={() => (
                <LoginGuard>
                  <Login />
                </LoginGuard>
              )}
            />
            <Route
              path="/registration"
              exact
              render={() => (
                <RegistrationGuard>
                  <Registration />
                </RegistrationGuard>
              )}
            />
            <Route path="/" exact render={() => <Redirect to={"/appsOverview"} />} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
