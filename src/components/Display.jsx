import React, { Component } from "react";
import { DataTypes } from "./store/ActionTypes";
import { Route, Switch, Redirect } from "react-router-dom";
import { PageConnector } from "./pagination/PageConnector";
import PaginationControls from "./pagination/PaginationControls";
import Statistics from "./Statistics";
import { Payments, Orders } from "./tables";
//import "../assets/scss/display.scss";
import "../assets/scss/tables.scss";
import "../assets/scss/searchsort.scss";

import SearchSortPane from "./SearchSortPane";
const filterData = (data = [], status) => {
  if (status === "all") return data;
  return data.filter((p) => p.status.toLowerCase() === status.toLowerCase());
};

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: [],
      orders: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.pageSize !== undefined) {
      const offset = (props.pageon - 1) * props.pageSize;
      const pageLimit = offset + props.pageSize;
      return {
        payments: props.payments.slice(offset, pageLimit),
        orders: props.orders.slice(offset, pageLimit),
      };
    }
    return state;
  }
  componentDidMount = () => {
    this.props.loadData(DataTypes.PAYMENTS);
    this.props.loadData(DataTypes.ORDERS);
  };
  componentDidUpdate = (prevProps, state) => {
    state.loading = true;
    const { history } = this.props;
    history.listen((location) => {
      const offset = (prevProps.pageon - 1) * this.props.pageSize;
      const pageLimit = offset + prevProps.pageSize;
      if (location.pathname !== prevProps.location.pathname) {
        state.orders = this.props.orders.slice(offset, pageLimit);
        state.payments = this.props.payments.slice(offset, pageLimit);
        console.log(state.orders);
        return;
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.payments ? (
          <Statistics {...this.props} />
        ) : (
          <div className="statsloader">
            <span className="loader4"></span>
          </div>
        )}

        <Switch>
          <Redirect
            from="/merchant/payments/:status"
            to="/merchant/payments/:status/1"
            exact={true}
          />
          <Route
            path="/merchant/payments/:status/:page"
            render={(routeProps) => (
              <React.Fragment>
                {this.props.payments ? (
                  <SearchSortPane
                    {...routeProps}
                    {...this.props}
                    key={"=psr="}
                    calcTotal={
                      routeProps.match.params.status === "all"
                        ? this.props.payments_total
                        : this.props.payments.filter(
                            (i) =>
                              i.status.toLowerCase() ===
                              routeProps.match.params.status
                          ).length
                    }
                    chosen={routeProps.match.params.status}
                  />
                ) : (
                  <div className="sortLoaderbox">
                    <div className="loader4"></div>
                  </div>
                )}

                <Payments
                  {...routeProps}
                  {...this.props}
                  payments={filterData(
                    this.state.payments,
                    routeProps.match.params.status
                  )}
                  pstatement={`${routeProps.match.params.status}`.toUpperCase()}
                />
                {this.props.payments ? (
                  <PaginationControls
                    calcTotal={this.props.payments_total}
                    key={"=p="}
                    {...this.props}
                  />
                ) : (
                  <div className="imgloader">
                    <span className="loader4"></span>
                  </div>
                )}
              </React.Fragment>
            )}
          />

          <Redirect
            from="/merchant/orders/:status"
            to="/merchant/orders/:status/1"
            exact={true}
          />
          <Route
            path="/merchant/orders/:status/:page"
            render={(routeProps) => (
              <React.Fragment>
                {this.props.orders ? (
                  <SearchSortPane
                    {...routeProps}
                    {...this.props}
                    key={"=osr="}
                    calcTotal={
                      routeProps.match.params.status === "all"
                        ? this.props.orders_total
                        : this.props.orders.filter(
                            (i) =>
                              i.status.toLowerCase() ===
                              routeProps.match.params.status
                          ).length
                    }
                    chosen={routeProps.match.params.status}
                  />
                ) : (
                  <div className="imgloader">
                    <span className="loader4"></span>
                  </div>
                )}
                <Orders
                  {...routeProps}
                  {...this.props}
                  orders={filterData(
                    this.state.orders,
                    routeProps.match.params.status
                  )}
                  ostatement={`${routeProps.match.params.status}`.toUpperCase()}
                />
                {this.props.orders ? (
                  <PaginationControls
                    calcTotal={this.props.orders_total}
                    key={"=opc="}
                    {...this.props}
                  />
                ) : (
                  <div className="imgloader">
                    <span className="loader4"></span>
                  </div>
                )}
              </React.Fragment>
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default PageConnector(Display);
