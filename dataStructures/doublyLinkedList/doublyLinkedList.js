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
}

const list = new DoublyLinkedList();
list.push('first node');
list.push('second node');
list.push('third node');
console.log(list.pop());
