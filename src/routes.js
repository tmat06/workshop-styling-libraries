import React from "react";
import { Switch, Route } from "react-router-dom";

import StyledButtons from "./components/StyledButtons";
import BootstrapButtons from "./components/BootstrapButtons";
import MaterialButtons from "./components/MaterialButtons";
import SemanticButtons from "./components/SemanticButtons";
import AntdButtons from "./components/AntdButtons";

export default (
  <Switch>
    <Route exact path="/" component={StyledButtons} />
    <Route path="/bootstrap" component={BootstrapButtons} />
    <Route path="/material" component={MaterialButtons} />
    <Route path="/semantic" component={SemanticButtons} />
    <Route path="/antd" component={AntdButtons} />
  </Switch>
);
