/*

Implementing the depth first search pre order method in a binary search tree class
This method should take no parameters and return an array of values of the tree while fulfilling dfs pre order principles
The dfs pre order principles are that it starts at a node, processes itself first, processes everything to the left and then processes everything to the right

Approach:
Utilize recursion for this problem
- start by creating a variable to hold the values of the tree
- create a variable for the node we are starting at for this tree traversal aka the root
- create a helper function called traverse that accepts a node
  - since it wants to process itself first, it will push the value of the given node onto the values array
  - since it wants to process the left side second, checks to see if it has a left child, if so, it will call the helper with the left child
  - since it wants to process the right side last, checks to see if it has a right child, if so, it will call the helper with the right child
- invoke the helper with the starting node
- return the values of the tree

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

  DFSPreOrder() {
    let values = [];
    let startingNode = this.root;

    function preOrderTraversal(node) {
      values.push(node.value);

      if (node.left) preOrderTraversal(node.left);

      if (node.right) preOrderTraversal(node.right);
    }

    preOrderTraversal(startingNode);

    return values;
  }
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(8);
BST.insert(9);
console.log(BST.DFSPreOrder());
