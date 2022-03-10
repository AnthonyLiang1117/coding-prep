/*

Implement the shift method on the DoublyLinkedList class
This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed

Restate:
create a method that
takes no inputs
returns 1 output: the removed node
the removed node should be from the beginning of the doubly linked list

Approach / Code:
check to see if the doubly linked list is empty, if it is, return undefined
create a variable to hold the node we are going to remove from the beginning of the doubly linked list list
if we are about to shift off the last node in the list,
assign the head and tail to be null
if not,
reassign the head property to be the removing node's next property
reassign the new head's previous property to be null
reassign the old head's next property to be null
decrement the length of the list since we just removed a node from the beginning of the list
return the removed null
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
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
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }
}
