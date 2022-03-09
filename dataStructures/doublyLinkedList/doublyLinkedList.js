/*
Node class
- properties
  - value, for what value the node stores
  - next , for what is the next node that it is linked to
  - previous, for what is the previous node that it is linked to
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

/*
Doubly Linked List class
- properties
  - head, the head node that starts the doubly linked list
  - tail, the tail node that ends the doubly linked list
  - length, how many nodes are in the linked list
*/

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push method, takes a value, adds a node to the end of the doubly linked list
  push(value) {
    // create a node with the given value
    let newNode = new Node(value);

    // checks to see if the doubly linked list is empty, if it is
    if (!this.head) {
      // assign the head and tail properties of the doubly linked list as the newly created node
      this.head = newNode;
      this.tail = this.head;

      // if not,
    } else {
      // assign the current tail property's next property to be the newly created node
      this.tail.next = newNode;

      // assign the newly created node's previous property to be the current tail node
      newNode.previous = this.tail;

      // reassign the doubly linked list's tail property to be the newly created node
      this.tail = newNode;
    }
    // increment the doubly linked list's length by 1 since we added a new node to the list
    this.length++;

    // return the list
    return this;
  }

  //pop method, takes no parameters, removes a node from the end of the doubly linked list
  pop() {
    // check to see if the doubly linked list is empty, if so, return undefined
    if (!this.head) return undefined;

    // creates a variable to hold the node we want to eventually remove
    let removeNode = this.tail;

    // checks to see if we are about to remove the last node from the linked list, if so make the head and tail property null to match that
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;

      // if not,
    } else {
      // reassign the tail property to be the removing node's previous property
      this.tail = removeNode.previous;

      // reassign the new tail's next property to be null;
      this.tail.next = null;

      // remove the previous properties from the removed node since it will still have the linkage
      removeNode.previous = null;
    }
    // decrement the length of the doubly linked list
    this.length--;

    // return the removed node
    return removeNode;
  }

  // shift method, takes no parameters, removes a node from the beginning of the doubly linked list
  shift() {
    // check to see if the doubly linked list is empty, if so , return undefined;
    if (!this.tail) return undefined;

    // create a variable to hold the node that we want to eventually remove
    let oldHead = this.head;

    // if we end up removing the last node of the list, we want to assign the head and tail properties to be null since it will be an empty list
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;

      // if not,
    } else {
      // we want to reassign the head property to be the old head's next property
      this.head = oldHead.next;

      // we want to reassign the new head's previous property to be null;
      this.head.previous = null;

      // we want to also reassign the old head's next property to be null;
      oldHead.next = null;
    }
    // decrement the length of the doubly linked list since we are removing a node from the list;
    this.length--;

    // return the removed node;
    return oldHead;
  }
}

const list = new DoublyLinkedList();
list.push('first node');
list.push('second node');
list.push('third node');
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list);
