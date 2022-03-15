/*
Implementing a Node class
- creating the individual nodes that will make up our tree
- takes a value in a value and has a value, left and right property
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

/*
Implementing a Binary Search Tree class
- creating the overall BST Data Structure
- takes in no paramters and has a root property
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
