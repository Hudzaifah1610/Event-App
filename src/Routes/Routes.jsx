import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../Container/MainPage/MainPage";
import TwoPage from "../Container/TwoPage/TwoPage";
// import List from "../Container/List/List";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/form" component={TwoPage} />
    </Router>
  );
};

export default Routes;
