import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppDetailsGuard } from "../routeProtectors/AppDetailsGuard";
import { AppsOverviewGuard } from "../routeProtectors/AppsOverviewGuard";
import { LoginGuard } from "../routeProtectors/LoginGuard";
import Login from "../../Login";
import { RegistrationGuard } from "../routeProtectors/RegistrationGuard";
import Registration from "../../Registration";
import AppsOverview from "../../appOverview/AppsOverview";
import AppDetails from "../../appDetails/AppDetails";
import Dashboard from "../../dashboard/Dashboard";
import {DashboardGuard} from "../routeProtectors/DashboardGuard";
import EmailVerification from "../../emailVerification/EmailVerification";
import {EmailVerificationGuard} from "../routeProtectors/EmailVerificationGuard";

// Router for directing to the different pages
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
              path="/appDetails"
              render={() => (
                <AppDetailsGuard>
                  <AppDetails/>
                </AppDetailsGuard>
              )}
            />
            <Route
              path="/dashboard"
              render={() => (
                <DashboardGuard>
                  <Dashboard/>
                </DashboardGuard>
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
              path="/emailVerification"
              exact
              render={() => (
                <EmailVerificationGuard>
                  <EmailVerification />
                </EmailVerificationGuard>
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
