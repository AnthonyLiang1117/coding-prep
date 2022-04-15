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

unshift()
- this function should add a node to the beginning of the singly linked list. It should return the SLL.
- accepts a value as the value of the node we want to add to the list
- we can create the new node with the given value
- check to see if the list is empty
- if so ,
- we can assign the head and tail to be the new node
- other wise,
- assign the newly created node's next value to be the current head
- reassign the head to be the newly created node
- increment the length by 1 since we just inserted a node
- return the SLL
- Time Complexity of adding a node to the beginning of the SLL is constant time O(1) since we are just using the head property from the SLL

shift()
- this function should remove a node from the beginning of the singly linked list. It should return the removed node
- check if the SLL is empty, if so, return null
- put the old head into a variable
- reassign the head property to equal the current head's next value
- reassign the old head's next value to be null
- decrement the length of the SLL
- if the length now is at 0
- reassign the head and tail to be null;
- return the old head

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

insert()
- this function should insert at a specified index in a singly linked list. It should return true if the index is valid, and false if the index is invalid
- accept an index and a value
- the index is where the node to should in the SLLL
- value is what the node's value should hold
- we want to check if the index provided is within the range of the SLL, if it isnt, return false
- create a node with the given value
- we want to grab the node that is right before the index at where we want to place the node
- we then assign the newly created node's next property to be the grabbed node's next value to ensure that connection
- reassing the grabbed node's next property to be the newly created node so it is in the right index
- increment the length by 1 since we added a node in the SLL
- return true when it is done

remove()
- this function should insert at a specified index in a singly linked list. It should return the removed node if the index is valid, and false if the index is invalid
- accepts a index
- if the index is not within the ranges of the SLL, return false
- if the index is 0, use shift method
- if the index is this.length - 1, use pop method
- we want to grab the node that is right before the given index
- create a variable to hold the node at the given index
- assign the right before node's next property to be the removing node 's next value
- reassign the removing node's next property to be null
- decrement the length since we just removed a node from the SLL
- return the removing node
- Time Complexity O(n) since we have to look through the SLL if the index is not 0 or the last index and depending how large the SLL, it will be dependant on that

rotate()
- this function should rotate all the nodes in the list by some number passed in.
- For example, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2,
- the list should be modified to be 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer
- so if you wanna rotate it by n, we are making the node at the nth index to be the head so we need to grab the node at n - 1
- we need a variable to hold the current last variable to connect it with the head to establish the connection;

- first you want to connect the SLL to be circular
- get to the last node in your SLL or if you have this.tail and assign it's next value to be this.head
- create a variable to hold what your current head value is
- create a counter variable to represent the current head's position in the SLL , I did it as 1
- have a while loop that runs until the counter reaches the given index
- this makes our currentNode the node we will want our future tail to be
- and the node that is right before where we want our future head to be
- you reassign the head property to be the currentNode's next value
- you reassign the tail property to be the currentNode
- you reassign the tails' next property to be null so it stops the SLL from being circular
- Time Complexity: O(n) since in the worst case, we will be looping the full length of the SLL so depending on how big it grows, run time will grow linearly

reverse()
- this function should reverse the SLL
- create a variable to hold the head property
- swap the head and the tail properties
- initialize previous to be null for now
- have a for loop through the SLL until the end
- 13 -> 27 -> 32 -> 71
we need 27 to point at 13
- create a next variable to hold the current 's next value
- assign current's next property to be whatever previous is
- set previous to be the value of the current
- set current to be the value of the next variable

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

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return null;

    const oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
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

  insert(index, value) {
    if (index < 0 || index > this.length + 1) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);

    newNode.next = previousNode.next;
    previousNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removeNode = previousNode.next;

    previousNode.next = removeNode.next;
    removeNode.next = null;

    this.length--;
    return removeNode;
  }

  rotate(index) {
    // make sure you have these 3 things checked off for rotated
    // you need to make your SLL circular
    // you need to grab the node right before where your index wants you to rotate it
    // reassign the head and tail

    // we need to modulo it so its within the range of our SLL
    index = index % this.length;

    // if number is negative, we need to add it to the length in order to be a left rotation
    if (index < 0) index = this.length + index;

    if (index === 0) return;

    const oldTail = this.tail;
    oldTail.next = this.head;

    let current = this.head;
    let counter = 1;

    // iterates until current is the node that is right before where our index wants to rotate
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    this.tail = current;
    this.head = current.next;
    this.tail.next = null;
  }

  reverse() {
    let current = this.head;

    this.head = this.tail;
    this.tail = current;

    let previous = null;

    for (let i = 0; i < this.length; i++) {
      let next = current.next;

      current.next = previous;

      previous = current;

      current = next;
    }

    return this;
  }
}

let SLL = new SinglyLinkedList();
SLL.push('1');
SLL.push('2');
SLL.push('3');
SLL.push('4');
SLL.push('5');
console.log(SLL.reverse());
