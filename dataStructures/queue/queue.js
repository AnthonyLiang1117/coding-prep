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

dequeue method, does not take parameters, removes a node from the beginning to simiulate the first element added to the queue gets removed
creates a variable to hold the first node in the queue
checks to see if the we are about to remove the last node in the queue
if so,
reassign the last property to be

reassign the first property to be the old first's next property
reassign the old first's next property to be null;
decrement the size by 1 since we are removing an node from the queue
return the removed node's value

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
  dequeue() {
    if (this.size === 0) return null;

    let oldFirst = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = oldFirst.next;

    this.size--;
    return oldFirst.value;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
