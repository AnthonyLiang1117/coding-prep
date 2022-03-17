/*

Implement breadth first search method for the binary search tree class
This method should take no parameter and print out an array of the values in a tree while fulfilling the breadth first search principles
Breadth first search should make sure to process every in one level from left to right before processing to the next

Approach:
Can utilizie a queue to make sure which nodes need to be processed in order
using its first in first out principle, using push to add in from the back and shift to remove from the front

- create a variable to represent a queue we will be using
- create a variable to hold the values of the array
- create a variable to hold the starting node of the tree aka the root
- enqueue the starting node onto the queue
- create a while loop that runs while there is something inside of the queue
  - we then want to dequeue a node from the queue
  - push the value of the dequeued node onto the array
  - check to see if it has a left child
    - if so, enqueue the left child onto the queue
  - check to see if it has a right child
    - if so, enqueue the right child onto the queue
- return the values of the array

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

  BFS() {
    let queue = [];
    let values = [];
    let currentNode = this.root;

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();

      values.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }

    return values;
  }
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(8);
BST.insert(9);
console.log(BST.BFS());
