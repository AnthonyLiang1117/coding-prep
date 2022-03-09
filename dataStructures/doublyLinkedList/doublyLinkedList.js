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

  // unshift method, takes a value, adds a node to the beginning of the list
  unshift(value) {
    // create a node with the given value
    let newNode = new Node(value);

    // if the doubly linked list is empty,
    if (!this.head) {
      // assign the head and the tail to be the newly created node;
      this.head = newNode;
      this.tail = this.head;

      // if not,
    } else {
      // point the newly created node's next property to be the current head
      newNode.next = this.head;

      // point the current head's previous property to be the newly created node
      this.head.previous = newNode;

      // reassign the head property to be the new node
      this.head = newNode;
    }
    // increment the length of the doubly linked list
    this.length++;

    // return the list
    return this;
  }

  // get method, takes an index, returns the node at the given index
  get(index) {
    // check to see if the index is within the scope of the doubly linked list length, if not, return null;
    if (index < 0 || index >= this.length) return null;

    // initialized currentNode
    let counter, currentNode;

    // checks to see if the index is less than or equal to half of the doubly linked list's length, if so
    if (index <= this.length / 2) {
      // create a counter to eventually reach the index
      counter = 0;

      // create a variable to hold the starting node, in this case the head node;
      currentNode = this.head;

      // have a while loop that will run until the counter === the index;
      while (counter !== index) {
        // reassign the variable to equal to the next one in the doubly linked list
        currentNode = currentNode.next;

        // increment counter by 1
        counter++;
      }
      // if the index is greater than the half of the doubly linked list
    } else {
      // create a counter that starts at the position of the last node (length - 1 since it is like an array)
      counter = this.length - 1;

      // create a varialble to hold the srating node, in this case the tail node;
      currentNode = this.tail;

      // have a while loop that will run until the counter === the index;
      while (counter !== index) {
        // reassign the variable to be the previous node in the doubly linked list
        currentNode = currentNode.previous;

        // decrement the counter by 1
        counter--;
      }
    }
    // return the node;
    return currentNode;
  }

  // set method, takes an index and value, gets the node at the given index and updates the value of that node while returning a boolean
  set(index, newValue) {
    // create a variable that utilizies the get method to get the node at the given index
    let getNode = this.get(index);

    // if the node is is truthy
    if (getNode) {
      // reassign that node's value property to be the new value
      getNode.value = newValue;

      // return true
      return true;
    }

    // if the node is falsey, return false;
    return false;
  }

  // insert method, takes a index and a value, adds a node with the given value and adds it at the given index while returning a boolean
  insert(index, value) {
    // checks to see if the index is within the range of the length, if not, return null
    if (index < 0 || index > this.length) return false;

    // checks to see if the index is 0, if so, use unshift method and return true
    if (index === 0) return !!this.unshift(value);

    // checks to see if the index is the length, if so, use push method since we are lookign to add a node to the end of the list and return true
    if (index === this.length) return !!this.push(value);

    // we want to create a node with the given value
    let newNode = new Node(value);

    // grab the node that is going to be right before where you want to insert the node to
    let previousNode = this.get(index - 1);

    // create a variable to hold the reference to current node at the given index
    let afterNode = previousNode.next;

    // assign the newly created node 's next to be the grabbed node's next value
    newNode.next = afterNode;

    // assign the old node at the given index 's previous property to point at the new node
    afterNode.previous = newNode;

    // assign the newly created node's previous to be the grabbed node
    newNode.previous = previousNode;

    // assign the grabbed node's next to be the newly created node
    previousNode.next = newNode;

    // increment the length of the doubly linked list since we just added a node to it
    this.length++;

    // return true
    return true;
  }
}

const list = new DoublyLinkedList();
list.push('0th node');
list.push('1st node');
list.push('2nd node');
list.push('3rd node');
list.push('4th node');
console.log(list.insert(5, '5th node'));
console.log(list);
