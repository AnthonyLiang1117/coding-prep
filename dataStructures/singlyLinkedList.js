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

  // shift method that removes the a node from the front of the singly linked list and returns the value of the node removed
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

  // unshift method that, takes a value as a parameter, adds a node to the front of the singly linked list and returns the list
  unshift(value) {
    // creates a new node with the value passed in
    let newNode = new Node(value);

    // if the singly linked list is empty, assign both the head and tail property to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // if not, assign the new Node's next property to be the current head property
      newNode.next = this.head;

      // reassign the singly linked list's head property to be the newly created Node
      this.head = newNode;
    }
    // increment the list's length by 1;
    this.length++;

    // return the list;
    return this;
  }

  // get method that, takes a index as a paramter, finds the node at that position in the singly linked list and returns that node
  // singly linked lists are like arrays where the first item is the 0th index
  get(index) {
    // if the index is negative or greater than or equal to the length of the singly linked list, return null;
    if (index < 0 || index >= this.length) return null;

    // create a variable to store the node that we are looking for currently
    let returnedNode = this.head;

    // loop through the singly linked list until we get to the index
    for (let i = 1; i <= index; i++) {
      returnedNode = returnedNode.next;
    }

    // return the node at that position
    return returnedNode;
  }

  // set method that, takes an index and a new value, finds the node at that index. If found, change the value of the node and return true. If not, return false.
  set(index, newValue) {
    // use the get method to get the node at the given index
    let getNode = this.get(index);

    // if the node is found,
    if (getNode) {
      // reassign the value property for that node and return true
      getNode.value = newValue;
      return true;
    }
    // if the node is not found, return false
    return false;
  }

  // insert method that, takes an index and a value, adds a node at that given index. Should always return true or false;
  insert(index, value) {
    // if the index is negative or greater than the length of the singly linked list, return false;
    if (index < 0 || index > this.length) return false;

    // create new node with the given value
    let newNode = new Node(value);

    // if the index is equal to the length of the singly linked list, just add the new Node onto the end of the list
    if (index === this.length) return !!this.push(value);

    // if the index is equal to 0, just add the new Node onto the beginning of the list
    if (index === 0) return !!this.unshift(value);

    // get the node at the postion right before where we want to insert the new node
    let previousNode = this.get(index - 1);

    // assign the new Node's next property to be the node at the position we want to insert the new node at
    newNode.next = previousNode.next;

    // reassign that node's next property to be the newly created node
    previousNode.next = newNode;

    // increment the length of the list by 1;
    this.length++;

    // return true;
    return true;
  }
}

const list = new SinglyLinkedList();
list.push('good morning');
list.push('good afternoon');
list.push('hello');
list.push('hi');
list.push('bye');
// console.log('INSERTING A NODE !!!', list.insert(0, 'inserting'));
// console.log('INSERTING A NODE!!!', list.insert(6, 'ending'));
console.log(list);
// console.log('GETTING NODE AT POSITION 2!!', list.get(2));
// console.log('LOOKING AT THE PREVIOUS NODE!!', list.get(1));
