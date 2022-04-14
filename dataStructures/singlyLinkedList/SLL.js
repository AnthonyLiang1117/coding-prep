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
}

let SLL = new SinglyLinkedList();
SLL.push('1');
SLL.push('2');
SLL.push('3');
console.log(SLL.pop());
console.log(SLL.pop());
console.log(SLL.pop());
console.log(SLL);
