import { CssBaseline, Paper } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "../components/common/Header";
import HomePage from "../pages/home";

const Routes = () => (
  <Router>
    <Route path="/" component={HomePage} />
    {/* <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={MainSearchView} />
      <Route
        path="/"
        render={() => {
          <Redirect to="/login" />;
        }}
      /> */}
  </Router>
);

export default Routes;
