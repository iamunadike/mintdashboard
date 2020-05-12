import React from "react";
import "../../assets/scss/sidenav.scss";
import {
  wallet,
  goodwallet,
  badwallet,
  overview,
  radio,
  orders,
  merchant,
  order_pending,
  ordercomplete,
} from "../../assets/images/sidebar";
import { Link } from "react-router-dom";

const SideNavigation = ({ baseUrl }) => {
  return (
    <div className="sidebar">
      <div className="verify">
        <span className="title">GENERATE INVOICE</span>
      </div>
      <div className="sidemenu">
        <span className="main_title">Main</span>
        <span className="payment_title">Payments</span>
        <span className="order_title">Orders</span>
        <ul>
          <li>
            <Link to={`${baseUrl}`}>
              <img src={overview} />
              <div className="title">Overview</div>
            </Link>
          </li>
          <li>
            <Link to={`${baseUrl}/${"payments/all/1"}`}>
              <img src={wallet} />
              <div className="title">All Payments</div>
            </Link>
          </li>
          <li>
            <Link to={`${baseUrl}/${"payments/reconciled"}`}>
              <img src={goodwallet} />
              <div className="title">Reconciled Payments</div>
            </Link>
          </li>
          <li>
            <Link to={`${baseUrl}/${"payments/unreconciled"}`}>
              <img src={badwallet} />
              <div className="title">Un-Reconciled Payments</div>
            </Link>
          </li>
          <li>
            <img src={radio} />
            <div className="title">Manual Settlement</div>
          </li>
          <li>
            <Link to={`${baseUrl}/${"orders/all/1"}`}>
              <img src={orders} />
              <div className="title">All Orders</div>
            </Link>
          </li>
          <li>
            <Link to={`${baseUrl}/${"orders/pending"}`}>
              <img src={order_pending} />
              <div className="title">Pending Orders</div>
            </Link>
          </li>
          <li>
            <Link to={`${baseUrl}/${"orders/completed"}`}>
              <img src={ordercomplete} />
              <div className="title">Completed Orders</div>
            </Link>
          </li>
          <li>
            <Link to={`${baseUrl}/${"profile"}`}>
              <img src={merchant} />
              <div className="title"> Merchant Profile</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
