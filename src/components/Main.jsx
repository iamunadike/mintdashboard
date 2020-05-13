import React, { Component } from "react";
import { Navigation } from "./navigation/Navigation";
import SideNavigation from "./navigation/SideNavigation";
import Display from "./Display";
import Transactions from "./Transactions";

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <SideNavigation baseUrl={"/merchant"} />
        <Transactions />
        <Display {...this.props} />
      </React.Fragment>
    );
  }
}
