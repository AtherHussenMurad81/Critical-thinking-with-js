class Node {
  constructor(value) {
    this.value = value;
    this.next = null; //initially not value
  }
}
const head = new Node(10);
// console.log(head); // Output: Node { value: 10, next: null }
// Indivisually created a node of upper
head.next = new Node(20);
// console.log(head); //output: Node { value: 10, next: Node { value: 20, next: null } }

// console.log(head.next); // Output: Node { value: 20, next: null }

head.next.next = new Node(39); // its append to call next next next of the next value
// console.log(head); //Node {
//   value: 10,
//   next: Node { value: 20, next: Node { value: 39, next: null } }
// }
let temp = head;

while (temp != null) {
  console.log(temp.value, "");
  temp = temp.next; // its must be write
}
