/*

Implement the push method in a doubly linked list class. This function should accept a value add a node to the end of hte doubly linked list with in the given value. It should return the doubly linked list

Restate:
  create a push method inside the class that
  takes 1 input: a number
  the value we want to be in the node that we will be placing on the end of the doubly linked list
  returns 1 output: the doubly linked list

Approach / Code:
  create a node with the given value
  check to see if the doubly linked list is empty,
  if it is,
  assign both the head and tail to be the newly created node
  if not,
  point the current tail's next property to the newly created node
  point the new node's previous property to be the current tail
  reassign the current tail to be the newly created node
  increment the length of the doubly linked list since we just added a node to the list
  return the list

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
}
