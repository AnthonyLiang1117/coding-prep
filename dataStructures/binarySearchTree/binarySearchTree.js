/*
Implementing a Node class
- creating the individual nodes that will make up our tree
- takes a value in a value and has a value, left and right property
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
Implementing a Binary Search Tree class
- creating the overall BST Data Structure
- takes in no paramters and has a root property

.insert()
- takes a value and returns the entire linked list if inserted a node
- create a node with the given value
- checks to see if the BST has a root
- if not,
  - assign the newly created node to be the root property of the BST
- if there is,
  - checks to see if the value of the node created is less than or greater than the value of the root
  - if its less than,
    - check to see if there is a node to the left of node we are comparing with
    - if there isnt,
      - assign the left property to the node we are looking at as the newly created node
    - if there is,
      - move the node to the left property and redo the steps of checking if its less or greater than the value
  if its more than,
    - check to see if there is a node to the right of the node we are comparing with
    - if there isnt,
      - assign the right property to the node weare looking at as the newly created node
    - if there is,
      - move the node to right property and redo the steps of checking if its less or greater than the value

.find()
- takes a value and returns a boolean depending if the given value passed in is in the BST
- checks to see if the BST is empty
- if it is, return false since no nodes means no values
- if not, if we are doing it iteratively
  - create a variable to represent the current node we are looking for
  - create a while loop that holds everything inside to traverse through the BST
  - check to see if the given value is equal to the current node's value
    - if so,
    - return true
    - if not,
      - checks to see if the value is less or greater than the current node's value
      - if its less than
        - if there is a value for the current node's left property,
          - reassign the current node and repeat the steps
        - if there isnt a value,
          - return false to break out of the while loop
      - if its greater than
        - if there is a value for the current node's right property,
          - reassisng the current node and repeat the steps
        - if there isnt a value,
         - return false to break out of the while loop

*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // recursive version of insert method

  // compare(currentNode, newNode) {
  //   if (newNode.value === currentNode.value) return undefined;
  //   if (newNode.value < currentNode.value) {
  //     if (!currentNode.left) {
  //       currentNode.left = newNode;
  //     } else {
  //       this.compare(currentNode.left, newNode);
  //     }
  //   } else if (newNode.value > currentNode.value) {
  //     if (!currentNode.right) {
  //       currentNode.right = newNode;
  //     } else {
  //       this.compare(currentNode.right, newNode);
  //     }
  //   }
  // }

  // insert(value) {
  //   let newNode = new Node(value);

  //   if (!this.root) {
  //     this.root = newNode;
  //   } else {
  //     this.compare(this.root, newNode);
  //   }

  //   return this;
  // }

  // iterative way for insert method in BST.js

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (newNode.value === currentNode.value) return undefined;
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return true;

      if (value < currentNode.value) {
        if (!currentNode.left) return false;

        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) return false;

        currentNode = currentNode.right;
      }
    }
  }
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(8);
BST.insert(9);
console.log(BST.find(9));
console.log(BST.find(10));
console.log(BST.find(15));
console.log(BST.find(20));
