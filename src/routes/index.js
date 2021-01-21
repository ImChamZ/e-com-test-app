import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";

const Routes = () => (
  <Router>
    <Route path="/" component={HomeContainer} />
  </Router>
);

export default Routes;
