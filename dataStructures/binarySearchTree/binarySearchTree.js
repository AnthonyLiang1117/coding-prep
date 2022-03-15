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
      - move the node to right property and redo the steps of checking if its less or greater than the valur

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
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(15);
console.log(BST.insert(8));
console.log(BST.insert(9));
console.log(BST.root.left.right);
