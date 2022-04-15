/*

Creating a node class for BST
- has a value property, left property to point at left child, right property to point at right child

Creating a Binary Search Tree class
- consists of nodes
- it has a root property
- everything that is greater than the parent node, goes to the right of the node
- everything that is less than the parent node, goes to the left of hte node

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
}
