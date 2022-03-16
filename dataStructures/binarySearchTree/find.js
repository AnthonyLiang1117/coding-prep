/*

Implementing find method for Binary Search Tree


Approach:
This method should take a value and return a boolean depending on if the value is within the BST
- check to see if the BST is empty
  - if it is,
   - return false since we will have no values within the BST
- create a variable to be the holder of what we are comparing with the given value
- create a while loop that runs continously so we can trasverse through the BST
- check to see if the given value is equal, less than or greater than the current node's value we are looking at
  - if its equal
    - return true;
  - if its less than,
    - check to see if there is a left child for the current node
      - if not,
        - return false because that means we are no more nodes to trasverse and to break out of while loop
      - if yes,
        - reassign the current node we are looking at to be the left child so we can keep going
  - if its greater than,
    - check to see if there is a right child for the current node
      - if not,
        - return false to break out of the while loop
      - if yes,
       - reassign the current node we are looking at to be the right child so we can keep going
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
