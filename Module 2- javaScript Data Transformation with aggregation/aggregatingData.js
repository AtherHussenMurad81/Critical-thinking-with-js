const cartItems = [
  { category: "Electronics", item: "Laptop", price: 80000, quantity: 1 },
  { category: "Peripherals", item: "Mouse", price: 500, quantity: 2 },
  { category: "Peripherals", item: "Keyboard", price: 1500, quantity: 1 },
  { category: "Audio", item: "Headphone", price: 2000, quantity: 1 },
];

const bestSellingItem = cartItems.reduce((table, item) => {
  const { category, price, quantity } = item;

  // console.log(table, item);
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;

  return table;
}, {});

console.log(bestSellingItem);
