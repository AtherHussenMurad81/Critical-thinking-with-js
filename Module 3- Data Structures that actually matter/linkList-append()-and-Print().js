class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.hand = null;
    this.tail = null;
    this.length = 0;
    // this.size = 0;
  }
  append(value) {
    const newNode = new Node(value); // node banalam

    //if the link list is empty
    if (this.head == null) {
      this.head = newNode;
      // new node er dike point out koro

      this.tail = newNode;
    } else {
      // if the link List is not empty
      this.tail.next = newNode;
      //1st. ager tail tar next er maje new node ta bosaidisi
      this.tail = newNode;
      //2nd. ager node muse jacce and tail er maje notun node ta bosaidisi
    }

    this.length++; // must be write for using class
  }
  prepend() {}
  insert() {}
  remove() {}
  print() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join("-->"));
  }
}
//create linkList
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(10);
linkedList.append(20);
linkedList.append(16);
linkedList.append(16);

linkedList.print();
