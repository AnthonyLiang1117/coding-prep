/*
Implement the pop method into the doubly linked list class
This function shoudl remove a node at the end of the DoublyLinkedList. It should return the node removed.

Restate:
Create a the pop method that
takes in NO inputs
returns 1 output: the removed node from the end of the list

Approach / Code:
Check to see if the doubly linked list is empty, if it is, return undefined
create a variable to hold the node we are about to remove
if we are about to pop off the last node in the doubly linked list
assign both the head and the tail properties to be null
if not
reassign the tail property to be the removing node's previous property
reassign the new tail property's next to be null
reassign the removing node's previous property to be null so it has no linkage anywhere
decrement the length of the doubly linked list since we just removed a node from it
return the removed node
*/

class Node {
  constructor(value) {
    this.value = value;
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
  pop() {
    if (!this.head) return undefined;

    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }
}
