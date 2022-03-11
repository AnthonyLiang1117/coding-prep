/*

Implement the get method in the DoublyLinkedList class
This internal / helper function should find a node at a specfied index in a DoublyLinkedList. It should return the found node

Restate:
Create a method that
takes 1 input: a number
the number is the index of the node we want in the doubly linked list
returns 1 output: a node
the node we want to get at the given index
since this is a doubly linked list, depending on which side the index is closer to, will determine if we start at the head or the tail

Approach:
if the index is less than 0 or greater than or equal to the length, return null;
create a variable that will keeping track of which node your at
create a counter to keep track of what index youre at
if the index is less than or equal to half of the length
have the variable start at the beginning of the list
have the counter start at 0
create a while loop that runs when the counter doesnt equals the index
reassign the variable to be the next property of itself
increment the counter so it eventually breaks out of the loop
if the index is more than half of the length
have the variable start at the end of the list
have the counter start at the index of the last node
create a while loop taht runs wehn the counter doesnt equal the index
reassign the variable to be the previous property of itself
decrement the counter so it eventually breaks out of the loop
return the variable
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
}

let list = new DoublyLinkedList();
list.push('1');
list.push('2');
list.push('3');
console.log(list);
console.log(list.get(0));
