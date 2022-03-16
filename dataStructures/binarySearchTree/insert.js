/*

Implementing insert method into binary search tree class

Approach:
The method should take a value and insert a node into the BST within the BST rules and return the entire list if complete
the values that are less than the root value are to the left of it and the values that are more than the root value are to the right of it

- creating a node with the given value
- check to see if the binary search tree is empty,
  - if so,
    - assign the new node to be the root of the BST
    - return the BST
- create a variable to hold the node that we are current looking at and comparing with the new node we created
- create a while loop that keeps going
  - check to see if the value of the new node is equal to, less than or greater than the value of the current node we are looking at
  - if they are equal,
    - return undefined
  - if less than,
    - check to see if there is a left child node already for the current node
    - if not,
      - assign the new node to be the left child
      - return the BST to break out of the while loop
    - if there is,
      - reassign the current node we are looking at to be the left child
      - redo these steps within the while loop
  - if more than,
    - check to see if there is a right child for the current node
    - if not,
      - assign the new node to be the right child
      - return the list
    - if yes,
      - reassign the current node we are looking at to be the right child
      - redo the steps within the while loop
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return undefined;

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
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
BST.insert(8);
console.log(BST.insert(3));
console.log(BST.root.left);
