/*
  Node class
  has a value property to hold the value
  has a next property to reference the next node in the linked list
   - will have it default to null since right now, there is no next value
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
  Singly Linked List class
  has a head property to reference to the node that is at the beginning of the list
  has a tails property to refernece to the node that is at the end of the list
  has a length property that refers to how many nodes are in the linked list
*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push method that takes a value and adds a node to the back of the singly linked list
  push(value) {
    // creates a node with the given value
    let newNode = new Node(value);

    // checks to see if there is a head node already
    // if not,
    if (!this.head) {
      // assign head and tail as the new node that was created
      this.head = newNode;
      this.tail = this.head;

      // if yes,
    } else {
      // assign the current tail node's next property to be the new node that was created
      this.tail.next = newNode;

      // reassign tail node as the new node that was created
      this.tail = newNode;
    }
    // increment length counter by 1
    this.length++;
    return this;
  }

  // pop method that removes the a node from the back of the singly linked list and returns the value of the node removed
  pop() {
    // if the singly linked list is empty, return undefined
    if (!this.head) return undefined;

    // create a variable that holds the 2nd to last node
    let currentNode = this.head;

    // create a variable that holds the tail node we are looking for
    let nextNode = currentNode;

    // loop until we reach the tail node
    while (nextNode.next) {
      currentNode = nextNode;
      nextNode = currentNode.next;
    }

    // reassign the tail property to be the 2nd to last node
    this.tail = currentNode;

    // set the tail proerty aka the 2nd to last node's next value to be null
    currentNode.next = null;

    // decrement the length by 1;
    this.length--;

    // if we pop until the singly linked list is empty, we want to reassign the head and tail properties to represent that also
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // return the value of the node removed
    return nextNode.value;
  }

  // shift method that removes the a node from the front of the singly linked list and retursn the value of the node removed
  shift() {
    // if the linked list is empty, return undefined
    if (!this.head) return undefined;

    // create a variable to store the current head value
    let removeNode = this.head;

    // reassign the head property to be the current head nodes next property
    this.head = removeNode.next;

    // decrement the linked list's length property by 1;
    this.length--;

    // if we shift until the singly linked list is empty, we want to reassign the tial property to represent that
    if (this.length === 0) this.tail = null;

    // return the removed node's v
    return removeNode.value;
  }
}

const list = new SinglyLinkedList();
list.push('good morning');
console.log('CURRENT SINGLY LINKED LIST !!!!', list.push('good afternoon'));
console.log('REMOVED NODE VALUE!!!', list.shift());
