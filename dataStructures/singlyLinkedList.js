/*
  Node class
  has a value property to hold the value
  has a next property to reference the next node in the linked list
   - will have it default to null since right now, there is no next value
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
  Singly Linked List class
  has a head property to reference to the node that is at the beginning of the list
  has a tails property to refernece to the node that is at the end of the list
  has a length property that refers to how many nodes are in the linked list
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
