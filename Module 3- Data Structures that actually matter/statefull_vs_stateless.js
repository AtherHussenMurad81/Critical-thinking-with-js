// stateless
// const counter = (amount) => {
//   let count = 0;

//   for (let num of amount) {
//     count += num;
//   }
//   return count;
// };
// console.log(counter([3, 3]));
// console.log(counter([4, 3]));

// ............

const counter = {
  count: 0,
  add(amount) {
    this.count += amount;
  },
  print() {
    console.log(this.count);
  },
};
counter.add(2);
counter.add(23);
counter.print();
