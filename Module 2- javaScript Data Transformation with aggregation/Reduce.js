// count subtotal

const cartItems = [
  { id: 1, name: "Laptop", price: 80000, quantity: 1 },
  { id: 2, name: "Mouse", price: 500, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
  { id: 4, name: "Headphone", price: 2000, quantity: 1 },
];

const subtotal = cartItems.reduce(
  (
    subtotal,
    //accumulator
    product,
  ) => {
    // console.log(subtotal, product);
    return subtotal + product.price * product.quantity;
  },
  0,
);
// console.log(subtotal);

// find best scorer

const players = [
  { id: 1, Name: "Free Fire", score: 120 },
  { id: 2, Name: "PUBG Mobile", score: 200 },
  { id: 3, Name: "Call of Duty", score: 75 },
  { id: 4, Name: "FIFA 23", score: 50 },
];

// const sort = players.sort((a, b)=>(a.name).l)

const bestScore = players.reduce((bestPlayer, players) => {
  //   console.log(bestPlayer);
  if (bestPlayer.score > players.score) {
    return bestPlayer;
  }
  return players;
}, players[0]);
// console.log(bestScore);
