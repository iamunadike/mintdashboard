import React, { useState } from "react";
import { DataTypes } from "../store/ActionTypes";
import { connect } from "react-redux";
import { updateData } from "../store/ActionCreators";

const OrdersTableRow = (props) => {
  const [state, setstate] = useState({
    selected: props.order.status,
  });
  const handleSelect = (ev) => {
    setstate((state) => (state.selected = ev.target.value));
    props.order.status = state.selected;
    props.updateData(DataTypes.ORDERS, props.order);
  };

  return (
    <tr>
      <td>{props.order.id}</td>
      <td>{`${props.order.items}`.length}</td>
      <td>
        <select
          className="selection"
          value={`${props.order.status}`.toLowerCase()}
          onChange={handleSelect}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </td>
    </tr>
  );
};

const mapDispatchToProps = {
  updateData,
};
export const OrdersRow = connect(null, mapDispatchToProps)(OrdersTableRow);
