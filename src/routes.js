import React from "react";
import { Switch, Route } from "react-router-dom";

import StyledButtons from "./components/StyledButtons";
import BootstrapButtons from "./components/BootstrapButtons";

export default (
  <Switch>
    <Route exact path="/" component={StyledButtons} />
    <Route path="/bootstrap" component={BootstrapButtons} />
  </Switch>
);
