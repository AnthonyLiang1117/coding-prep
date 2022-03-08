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

  // push method, that accepts a value, adds a node to the end of the singly linked list
  push(value) {
    // creates a node with the value given
    let newNode = new Node(value);

    // if the linked list is empty
    if (!this.head) {
      // assign the head and the tail to be the newly created node
      this.head = newNode;
      this.tail = this.head;

      // if not,
    } else {
      // point the singly linked list's current tail's next property to be the newly created node
      this.tail.next = newNode;

      // reassign the tail node to be the newly created node
      this.tail = newNode;
    }
    // increment the length of the singly linked list by 1
    this.length++;

    // return the singly linked list
    return this;
  }

  // pop method, no parameters, removes a node from the end of the singly linked list and return that removed node
  pop() {
    // if the singly linked list is empty, return undefined;
    if (!this.head) return null;

    // create variable to hold the current node we are looking at
    let currentNode = this.head;

    // create variable to hold the next node that will check to see if it is the last node
    let nextNode = currentNode.next;

    // have a loop that runs through the singly linked list and runs until we get the node that has a null value for its next property
    while (nextNode.next) {
      // reassign the current node to be next node
      currentNode = nextNode;

      // reassign the next node to be the next after that
      nextNode = currentNode.next;
    }

    // assign the current node's next property to be null
    currentNode.next = null;

    // reassign the singly linked list's tail property to be the current node
    this.tail = currentNode;

    // decrement the length of the singly linked list as we removed a node from the list
    this.length--;

    // if we end up popping everything off the list, reset the head and tail properties to represent that
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // return the Node that we have removed
    return nextNode;
  }

  // shift method, takes no parameters, removes a node from the beginning of the singly linked list and return the removed node
  shift() {
    // if the singly linked list is empty, return null;
    if (!this.head) return null;

    // create variable to hold the current head node
    let currentNode = this.head;

    // create variable to be the new head node
    let nextNode = currentNode.next;

    // assign the current node we are removing's next value to be null so its not pointing at anything anymore
    currentNode.next = null;

    // reassign the singly linked list's head property to be the new head node
    this.head = nextNode;

    // decrement the singly linked list's length property since we removed a value from the list
    this.length--;

    // if we shift everything off, we need to reset the head and tail to demonstrate that
    if (this.length === 0) {
      this.tail = null;
    }

    // return the node that was removed
    return currentNode;
  }

  // unshift method, takes a value, adds a node to the beginning of the list
  unshift(value) {
    // create node with the given value
    let newNode = new Node(value);

    // if the singly linked list is empty, assign both the head and the tail to be the newly created list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // assign the newly created node's next property to be the the singly linked list's head property
      newNode.next = this.head;

      // reassign the head property to be the newly created list
      this.head = newNode;
    }
    // increment the linked list's length property since we just added a node onto the list
    this.length++;

    // return the list
    return this;
  }

  // get method, takes a index, and returns the node at that given index in the singly linked list. Like arrays, the first node counts as the 0 index
  get(index) {
    // if the index is negative or greater than or equal to the length of the array, return null
    if (index < 0 || index >= this.length) return null;

    // create a variable to hold the current node we are looking at
    let currentNode = this.head;

    // create a counter variable to keep track of what current index youre at in the singly linked list
    let counter = 0;

    // do a while loop to check to see the counter is not equal to index
    while (counter !== index) {
      // reassign the current node to be the current node's next property
      currentNode = currentNode.next;

      // increment the counter so that it eventually breaks out of the while loop
      counter++;
    }

    // return current node that we are at
    return currentNode;
  }

  // set method, takes an index and a value, and reassigns the given value to the node at the given index in the singly linked list and reutrns true. If the node is not found, returns false
  set(index, newValue) {
    // if the index is negative or the greater or equal to the length of the singly linked list, return false
    if (index < 0 || index >= this.length) return false;

    // use the get method to get the node we want at the given index
    let gotNode = this.get(index);

    // reassign that node's value property to be the new value
    gotNode.value = newValue;

    // return true;
    return true;
  }

  // insert method, takes an index and a value, and add a node at that given index, returns true if completed, returns false if not
  insert(index, value) {
    // if the index is negative or greater than the length of the singly linked list, return false;
    if (index < 0 || index > this.length) return false;

    // if the index is 0, you can just add the node to the beginning of the singly linked list and return true;
    if (index === 0) return !!this.push(value);

    // if the index is equal to this.length, you can just add the node to end of the singly linked list and return true;
    if (index === this.length) return !!this.unshift(value);

    // create a node with the value passed
    let newNode = new Node(value);

    // get the node that is right before where you want to insert the node
    let previousNode = this.get(index - 1);

    // assign the created node's next property to be the previous node's next property
    newNode.next = previousNode.next;

    // reassign the previous node's next property to point at the newly created node
    previousNode.next = newNode;

    // increment the length of the singly linked list as we inserted a node into it
    this.length++;

    // return true;
    return true;
  }

  //remove method, takes a index, removes the node at the given index. Return the removed node;
  remove(index) {
    // if the index is negative or greater than or equal to the length of the singly linked list, return undefined;
    if (index < 0 || index >= this.length) return null;

    // if the index is equal to 0, you can just remove the node from the beginning of the singly linked list
    if (index === 0) return this.shift();

    // if the index is equal to the length - 1 (since linked list index start at 0), you can just remove the last node from the end of the singly linked list
    if (index === this.length - 1) return this.pop();

    // get the node that is right before the node you want to remove
    let previousNode = this.get(index - 1);

    // create a variable to hold the node that you are going to remove
    let removeNode = previousNode.next;

    // reassign the previous node's next value to be the next value of the removed node
    previousNode.next = removeNode.next;

    // reassign the remove node's next property to be null since we dotn want it be pointing at anything anymore
    removeNode.next = null;

    // decrement the length of the singly linked list since we just removed a node from it
    this.length--;

    // return the removed node
    return removeNode;
  }

  // reverse method, takes no parameters, and reverses the singly linked list in place and return the list at the end
  reverse() {
    // create a node that holds the current node, basically where you are starting
    let current = this.head;

    // swap the head and the tail properties of the singly linked list
    this.head = this.tail;
    this.tail = current;

    // create a variable to hold the previous node so that you later point back to it
    let previous = null;

    // create a loop that goes runs through the singly linked list
    for (let i = 0; i < this.length; i++) {
      // create a variable to hold the current node's next value so we can keep moving forward in the linked list
      let next = current.next;

      // assign the current node's next node to be the previous node
      current.next = previous;

      // assing previous to be current
      previous = current;

      // reassign the current node to be next node
      current = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
console.log(list.push('1'));
console.log(list.push('2'));
console.log(list.push('3'));
console.log(list.push('4'));
console.log(list.unshift('0'));
console.log(list.set(4, '-1'));
console.log(list);
