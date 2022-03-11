/*

Implement the insert method into the doubly linked list class
This internal/helper function should insert a node at a specific index in a doublylinkedlist.
It should return true if the index is valid and false if the index is invalid

Restate:
Create a method that
takes 2 inputs: a index and a value
the 1st number is the index at where you want to add the node to in the doubly linked list
the 2nd number is the value we want the node to have
returns a boolean:
returns true if the index is valid and adds the node to the list
returns false if the index is invalid, means if it out of the range of the length

Approach / Code:
if the given index is negative or greater than the length, return false
if the index is 0, we can use the unshift method we created to add to the front of the doubly linked list
if the index is equal to the length of the doubly linked list, we can use the push method we created to add to the end of the doubly linked list
create the node we want with the given value
grab the node right before where we want to insert the node at with the get method
create a variable to reference the node that will be after the node we are inserting
assign the previous node 's next to be the new node
assign the new node's previous to be the previous node
assign the new node's next to be the next node
assign the next node's previous to be the new node
increment the length by 1 since we just added a node into the doubly linked list
return true;

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
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.prev = previousNode;

    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }
}
