/*

Implementing a Singly linked list class
- SLL means that there a bunch nodes that point to the next node in the list
- has a head property that represents the first node in the linked list
- has a tail property taht represent the last node in the linked list
- has a length property that represnet how many nodes are in the linked list

Node class
- represents the nodes that make up the singly linked list
- has a value property taht we pass into it
- has a next property that is initialized

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
