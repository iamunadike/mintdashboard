import React, { useState } from "react";
import vw from "../../assets/images/vw.png";
import { DataTypes } from "../store/ActionTypes";
import "../../assets/scss/tables.scss";
import { updateData } from "../store/ActionCreators";
import { connect } from "react-redux";

const PaymentsTableRow = (props) => {
  const [state, setstate] = useState({
    selected: props.payment.status,
  });

  const handleSelect = (ev) => {
    ev.persist();
    setstate((state) => (state.selected = ev.target.value));
    props.payment.status = state.selected;
    props.updateData(DataTypes.PAYMENTS, props.payment);
  };
  return (
    <tr>
      <td>
        <img
          src={vw}
          style={{
            position: "absolute",
          }}
        />
        {props.payment.itemType}
      </td>
      <td>{props.payment.price}</td>
      <td>{props.payment.transactionId}</td>
      <td>{props.payment.time}</td>
      <td>
        <select
          className="selection"
          value={`${props.payment.status}`.toLowerCase()}
          onChange={handleSelect}
        >
          <option value="reconciled">Reconciled</option>
          <option value="unreconciled">UnReconciled</option>
        </select>
      </td>
    </tr>
  );
};

const mapDispatchToProps = {
  updateData,
};

export const PaymentsRow = connect(null, mapDispatchToProps)(PaymentsTableRow);
