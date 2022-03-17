/*

Implement the depth first search post order method in the binary search tree class
this method should accept no parameters and return a list of values of the tree
Depth first search post order should start at node, process everything to the left, then process everything to the right, then itself

Approach:
Utilize recursion for this approach
- create a variable to hold the values of the tree
- create a variable to hold the starting node aka the root
- create a helper that accepts a node
  - since it wants to process everything on the left first, if the given node has a left child, call the helper with the left child
  - since it wants to process everything on the right seocnd, if the given node has a right child, call the helper with the right child
  - since it wants to process itself last, push the given node's value onto the array of values
- invoke the helper function with the starting node
- return the array of values of the tree

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

  DFSPostOrder() {
    let values = [];
    let startingNode = this.root;

    function postOrderTraversal(node) {
      if (node.left) postOrderTraversal(node.left);

      if (node.right) postOrderTraversal(node.right);

      values.push(node.value);
    }

    postOrderTraversal(startingNode);

    return values;
  }
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(8);
BST.insert(9);
console.log(BST.DFSPostOrder());
