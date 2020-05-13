import React from "react";
import { OrdersRow } from "./OrdersRow";

const OrdersTable = (props) => {
  return (
    <React.Fragment>
      <div className="header">Orders</div>
      <div className="listings">
        <table>
          <thead>
            <tr className="head">
              <th>OrderId</th>
              <th>Items</th>
              <th>Shipped</th>
            </tr>
          </thead>
          <tbody>
            {props.orders == null || props.orders.length === 0 ? (
              <tr className="p-2" colSpan={3}>
                <td colSpan={4} className="empty">
                  No Orders: {props.ostatement}
                </td>
              </tr>
            ) : (
              props.orders.map((o) => <OrdersRow order={o} key={o.id} />)
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default OrdersTable;
