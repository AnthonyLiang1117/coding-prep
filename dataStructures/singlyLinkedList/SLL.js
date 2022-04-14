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

push()
- this function should take in a value and add a node to the end of the SLL. it should reutn the SLL
- we going to create a new node with the given value
- check to see if the SLL is empty
- if so,
- assign both the head and the tail to be the newly created node
- other wise, assign the current tail's next property to be the newly created node
- reassign the tail property to be the newly created node
- increment the length property by 1
- return the SLL
- Time Complexity of pushing to the end of SLL is constant time O(1) since we can immediately grab the tail since we have a tail property

pop()
- this function should remove a node at the end of the singly linked list. It should return the node removed
- we are going to need to keep in mind
- if the SLL is empty, we can immediatly return null
- if we end up popping off the last node from the list
- we need to reassign head and tail property to show that
- create a variable to hold the second to last node
- loop through the SLL using the length property to stop at the 2nd to last node
- assign the second to last node once we get to 2nd to last index
- create a variable to hold the last node that we want to return
- reassign the tail property to be the second to last node
- reassign the tail property's next property to null
- decrement the length property by 1
- return the previous tail node
- Time Complexiry of popping a value off the end of SLL is linear time O(n) since we have to loop based on the size of the SLL

get()
- this function should find a node at specified index in a SLL. It should return the found node
- accepts a number which should be the index we want to be
- we should loop through the array until we get to the specified index
- return the node at that index
- the index is not within the ranges of the length of the SLL, return null
- Time Complexity is O(n) since we will be looping at the worst case all the way through the loop

set()
- this function should accept an index and a value and update the value of the node in the SLL at the index with the new value.
- it should return true if the node is updated successfully or false if an invalid index is passed in
- use get method to get the node at the given index
- reassign the node's value to be the given value
- return true
- Time Complexity is O(n) since we will need to be moving throughout the SLL based on how many items at in it

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

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    if (this.length === 1) {
      let returnNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnNode;
    }

    let currentNode = this.head;
    let nextNode = currentNode.next;

    while (nextNode.next) {
      currentNode = nextNode;
      nextNode = currentNode.next;
    }

    this.tail = currentNode;
    this.tail.next = null;

    this.length--;
    return nextNode;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;

    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  set(index, value) {
    let node = this.get(index);

    if (!node) return false;

    node.value = value;

    return true;
  }
}

let SLL = new SinglyLinkedList();
SLL.push('1');
SLL.push('2');
SLL.push('3');
console.log(SLL.set(1, '1.5'));
console.log(SLL.get(1));
