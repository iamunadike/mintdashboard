import React from "react";
import "../assets/scss/transactions.scss";
import Tgraph from "../assets/images/tgraph.svg";
const Transactions = () => {
  return (
    <div className="transactions">
      <div className="containment">
        <span className="box">
          <p className="name">Total Transaction Value</p>
          <p className="value">â‚¦4,000,000</p>
          <p className="graph">
            <img src={Tgraph} />
          </p>
        </span>
      </div>
      <div className="containment">
        <span className="box">
          <p className="name">Total Transaction Value</p>
          <p className="value">â‚¦4,000,000</p>
          <p className="graph">
            <img src={Tgraph} />
          </p>
        </span>
      </div>
      <div className="containment">
        <span className="box">
          <p className="name">Total Transaction Value</p>
          <p className="value">â‚¦4,000,000</p>
          <p className="graph">
            <img src={Tgraph} />
          </p>
        </span>
      </div>
      <div className="containment">
        <span className="box">
          <p className="name">Total Transaction Value</p>
          <p className="value">â‚¦4,000,000</p>
          <p className="graph">
            <img src={Tgraph} />
          </p>
        </span>
      </div>
    </div>
  );
};

export default Transactions;
