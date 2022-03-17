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

.insert() - recursive or iterative solution
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

.find() - iterative solution
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

.breadthFirstSearch() - iterative solution
- the tree traversal method that makes sure we visit every node on one level before moving on to the next
- by using a queue, this allows for us to put every node, starting from the root, on each level from left to right onto the queue to make sure we hit everything on the level and their children will then also be added to the queue in order from left to right
- takes no parameters and returns an array of all the values in the tree
- create a queue to keep track of the node we need to look at (FIFO so .push() to add things on to the end and .shift() to remove things from the beginning)
- create a variable to hold the values we will need to return
- create a variable to hold the current node we are looking at
- enqueue the root's value of the tree
- have a loop that runs while the queue has values in it
- reassign current node variable to hold the value for when dequeued a node from the queue
  - push the value to the returning value's array
  - check to see if the current node has a left child
    - if so, enqueue the left child onto the queue
  - check to see if the current node has a right child
    - if so, enqueue the right child onto the queue

.dfsPreOrder() - recursive solution
- the depth first search tree traversal method that hits on the node itself first, then processes the left nodes then all of the right nodes
- create a variable to hold the values of the tree
- create a variable to hold the current node we are looking at
- create a helper function that takes a node
  - pushes the value of the given node onto the array of values
  - checks to see if there is a left child of the given node
    - if so, call the helper function passing in the left child
  - checks to see if there is a right child of the given node
    - if so, call the helper function passing in the right child

.dsfPostOrder() - recursive solution
- the depth first search tree traversal method that starts at node processes the left node, processes the right node and then processes itself
- create a variable to store the values of the tree
- create a variable to hold the current node we are starting at aka the root
- create a helper function that accepts a node
  - since it wants to process the left nodes first, checks to see if the given node has a left child,
    - if so, call the helper function on its left child
  - since it wants to process the right nodes second, checks to see if the given node has a right child,
    - if so, call the helper fucntion on its right child
  - push the value of the given node onto the array
- invoke the helper function with the current node we are using
- return the value of the tree
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

  breadthFirstSearch() {
    let values = [];
    let queue = [];
    let currentNode = null;

    queue.push(this.root);

    while (queue.length) {
      currentNode = queue.shift();

      values.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }

    return values;
  }

  dfsPreOrder() {
    let values = [];
    let currentNode = this.root;

    function traverse(node) {
      values.push(node.value);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    }

    traverse(currentNode);

    return values;
  }

  dfsPostOrder() {
    let values = [];
    let currentNode = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      values.push(node.value);
    }

    traverse(currentNode);
    return values;
  }
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(8);
BST.insert(9);
console.log(BST.dfsPostOrder());
