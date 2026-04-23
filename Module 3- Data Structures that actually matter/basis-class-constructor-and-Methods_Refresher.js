// let count = 0;
// const counter = (amount) => {
//   count = count + amount;
//   return count;
// };

// console.log(counter(5));
// console.log(counter(8)); // not nessary

// ...............

// closer implement

//  safer of upper function

// const createCounter = () => {
//   //    this element called lauxical environment of under function elements
//   let count = 0;

//   return (amount) => {
//     count += amount;
//     return count;
//   };
// };

// const counter = createCounter();

// console.log(counter(5));
// console.log(counter(8));

// state full

class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);

counter1.add(2);
counter1.add(10);
counter1.print();
