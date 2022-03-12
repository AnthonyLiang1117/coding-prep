/*

Implementing a Queue with the principles of the singly linked list
Needs to satisfy the First in First out rule

enqueue method, takes a value, adds a node to the end of the queue
creates a node with the given value
checks to see if the queue is current empty
if so,
assign both the first and last properties to be the new node
if not,
point the current last's next property to be the new node
reassign the new node to be the new tail
increment the size by 1 since we just added a node to the queue
return the list


*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
