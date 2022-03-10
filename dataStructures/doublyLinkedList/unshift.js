/*

Implement the unshift method in the doubly linked list
This function should accept a value and add a node to the beginning of the DoublyLinkedList with the given value. It should return the doublylinkedlist.

Restate:
create a method that takes
1 input: a number
the number is the value we want the node to have
1 output: the list
the doubly linked list AFTER we add the node to the beginning of the list

Approach / Code:
create the node with the given input
check to see if the list is empty
if so
assign the head and tail of the property to be the newly created node
if not
point the new node's next to be the current head
point the current head's previous to be the new node
reassign the head to be the new node
increment the lenght of the doubly linked list since we just added a node to it
return the list

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
}
