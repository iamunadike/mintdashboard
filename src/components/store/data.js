const pstatus = ["Reconciled", "UnReconciled"];
const ostatus = ["Completed", "Pending"];
let ps = [];
let orders = [];

for (let i = 0; i < 14; ++i) {
  ps.push({
    id: i,
    itemType: "Apple Mac Book 15” 250 SSD 12GB",
    price: "$73430",
    transactionId: 1234567890,
    time: "12:30",
    status: pstatus[Math.floor(Math.random() * pstatus.length)],
  });
}

for (var i = 0; i < 30; ++i) {
  let order = {
    id: "#" + Math.floor(100000 + Math.random() * 900000).toString(),
    items: [],
    status: ostatus[Math.floor(Math.random() * ostatus.length)],
  };
  var itemsCount = Math.floor(1 + Math.random() * 5);
  var items_ids = [];
  while (items_ids.length < itemsCount) {
    var id = Math.floor(1 + Math.random() * ps.length);
    if (items_ids.indexOf(id) === -1) {
      items_ids.push(id);
    }
  }
  for (let j = 0; j < itemsCount; ++j) {
    order.items.push({
      quantity: Math.floor(1 + Math.random() * 5),
      item_id: items_ids[j],
    });
  }
  if (orders.indexOf(order.id) === -1) {
    orders.push(order);
  }
}

const payments = ps;

export const data = {
  payments,
  orders,
};
