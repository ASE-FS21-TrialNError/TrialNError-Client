import React from "react";
import { Redirect } from "react-router-dom";

// if there is a token in the local storage, display child else redirect to login page
export const RegistrationGuard = (props) => {
  if (!localStorage.getItem("token")) {
    return props.children;
  }
  return <Redirect to={"/appsOverview"} />;
};
