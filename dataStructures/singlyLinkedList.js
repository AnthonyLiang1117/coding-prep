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
}

const list = new SinglyLinkedList();
list.push('good morning');
console.log('CURRENT SINGLY LINKED LIST !!!!', list.push('good afternoon'));
console.log('REMOVED NODE VALUE!!!', list.pop());
console.log('REMOVED NODE VALUE!!!', list.pop());
console.log('REMOVED NODE VALUE!!!', list.pop());
