/*

Implement the remove method in the doubly linked list class
This function should remove a node at a specified index in a doubly linked list.
if the index is in range, It should return the remove node. if not, return undefined

Restate:
Create a function that
takes 1 input: a number
the number is the index at which you want to remove the node
returns an output: a node or undefined
the node that you removed from the doubly linked list

Approach / Code:
if the index is negative or greater than or equal to the length of the doubly linked list, return undefined
if the index is 0, you can use the shift method we created to remove the first node on the list
if the index is at the index of last node in the list, we can use the pop method we created to remove the last node on the list
use the get method we created earlier to grab the node at the given index
if the node is found,
create a variable to hold the node of the grabbed node's previous property
create a variable to hold the node of the grabbed node's next property
reassign the previous node's next to be the next node
reassign the next node's previous to be the previous node
assign both the next and previous properties of the grabbed node as null to get rid of the links
decrement the list since we just removed a node from the it
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
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode;
    let counter;

    if (index <= this.length / 2) {
      currentNode = this.head;
      counter = 0;

      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;

      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }
  set(index, value) {
    let grabbedNode = this.get(index);

    if (grabbedNode) {
      grabbedNode.value = value;
      return true;
    }
    return false;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let grabbedNode = this.get(index);
    let previousNode = grabbedNode.prev;
    let nextNode = grabbedNode.next;

    previousNode.next = nextNode;
    nextNode.prev = previousNode;

    grabbedNode.next = null;
    grabbedNode.prev = null;

    this.length--;
    return grabbedNode;
  }
}
