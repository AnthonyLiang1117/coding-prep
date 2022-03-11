/*

Implement the set method in the Doubly linked list class
This function should accept an index and a value and update the value of the node in the doubly linked list at the index with the new value.
It should return true if hte node is updated successfully or false if an invalid index is passed in

Restate:
create the set method that
takes 2 inputs: a number and a number
the first number is the index of the node in the doubly linked list we want to get
the 2nd number is the value we wanted to reassign that node to have
returns 1 input: a boolean
returns true if we were able to grab the node and change its value
return false if the index was not in range

Approach / Code:
we can use the get method that we created before to grab the node
if the node is found,
reassign the node's value property with the given value and return true;
if the node is not found,
return false;

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
}

let list = new DoublyLinkedList();
list.push('1');
list.push('2');
list.push('3');
console.log(list.set(0, '0'));
console.log(list);
