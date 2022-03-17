/*

Implementing depth first search in order method in a binary search tree class
This method accepts no parameters and returns an array of the values in a tree
Depth first search in order approach means it wants to start at a node, process everything to left, then process itself then process everything to right

Approach:
Utilize recursion in the approach
- create a variable to hold the values of the tree
- create variable to represent the starting node aka the root
- create a helper function that accepts a node
  - since it wants to processs everything to the left first, if the given node has a left child, call the helper with the left child
  - since it wants to process itself second, push the given node;s value onto the array
  - since it wants to process everyhign to the right last, if the given node has a right child, call the helper wiht the right child
- invoke the function with the starting node
- return the values of the array at the end

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

  DFSInOrder() {
    let values = [];
    let startingNode = this.root;

    function inOrderTraversal(node) {
      if (node.left) inOrderTraversal(node.left);

      values.push(node.value);

      if (node.right) inOrderTraversal(node.right);
    }

    inOrderTraversal(startingNode);
    return values;
  }
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(8);
BST.insert(9);
console.log(BST.DFSInOrder());
