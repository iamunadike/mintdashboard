import React from "react";
import { PaymentsRow } from "./PaymentsRow";

const PaymentsTable = (props) => {
  return (
    <React.Fragment>
      <div className="header">Payments</div>
      <div className="listings">
        <table>
          <thead>
            <tr className="head">
              <th>Item Type</th>
              <th>Price</th>
              <th>Transaction No</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.payments == null || props.payments.length === 0 ? (
              <tr className="p-2" colSpan={3}>
                <td colSpan={4} className="empty">
                  No Payments: {props.pstatement}
                </td>
              </tr>
            ) : (
              props.payments.map((p) => <PaymentsRow payment={p} key={p.id} />)
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default PaymentsTable;
