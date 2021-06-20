import React from "react";
import "./MainTablePage.css";
import Table1 from "../Table1/Table1";
import Table2 from "../Table2/Table2";
import { Switch, Route } from "react-router-dom";

function MainTablePage() {
  return (
    <div className="mainTableContainer">
      
      <Switch>
        <Route path="/table2" exact component={Table2} />
        <Route path="/" exact component={Table1} />
      </Switch>
      
    </div>
  );
}

export default MainTablePage;
