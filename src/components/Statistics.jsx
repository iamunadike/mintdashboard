import React from "react";
import PropTypes from "prop-types";
import imgGraph from "../assets/images/big_graph.png";
import "../assets/scss/statistics.scss";
const countStatus = (container, s) => {
  return container.filter((i) => i.status.toLowerCase() === s).length;
};
const Statistics = (props) => {
  return (
    <div className="display">
      <div className="date">Today: 5, Aug 2018 </div>
      <p className="weekdays">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
      </p>
      <div className="gradient">
        <img src={imgGraph} />
      </div>
      <div className="order">
        <p>
          <b>Orders</b>
        </p>
        <p></p>
        <p>Unshipped Orders: {countStatus(props.orders, "pending")}</p>
        <p>Completed Orders: {countStatus(props.orders, "completed")}</p>
        <p>Total Orders: {props.orders_total}</p>
      </div>
      <div className="payments">
        <p>
          <b>Payments</b>
        </p>
        <p></p>
        <p>Pending payments: {countStatus(props.payments, "unreconciled")}</p>
        <p>Reconcilled payments: {countStatus(props.payments, "reconciled")}</p>
        <p>Total Payments: {props.payments_total}</p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  payments_total: PropTypes.number.isRequired,
  orders_total: PropTypes.number.isRequired,
  orders: PropTypes.array.isRequired,
  payments: PropTypes.array.isRequired,
};

export default Statistics;
