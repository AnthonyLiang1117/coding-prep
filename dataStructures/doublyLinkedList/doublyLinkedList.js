/*
Node class
- properties
  - value, for what value the node stores
  - next , for what is the next node that it is linked to
  - previous, for what is the previous node that it is linked to
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.tail = null;
  }
}

/*
Doubly Linked List class
- properties
  - head, the head node that starts the doubly linked list
  - tail, the tail node that ends the doubly linked list
  - length, how many nodes are in the linked list
*/

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
