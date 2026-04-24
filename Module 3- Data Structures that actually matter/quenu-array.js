// queue  like fifo. its do, array and linklist.
//  Enquenu and dequenu
// LiFO  type means stack

// ⚙️ Basic Operations

// A stack mainly has these operations:

// Push → Add an item to the top
// Pop → Remove the top item
// Peek → Look at the top item without removing it
// isEmpty → Check if the stack is empty

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  peak() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log("Start ->", this.items.join(" -> "), "-> end");
  }
  //slice cannot muted its
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(20);
console.log(queue.peak());
queue.print();
