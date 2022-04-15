/*

Creating a node class for BST
- has a value property, left property to point at left child, right property to point at right child

Creating a Binary Search Tree class
- consists of nodes
- it has a root property
- everything that is greater than the parent node, goes to the right of the node
- everything that is less than the parent node, goes to the left of the node

insert()
- this function acepts a value and inserts it into the BST in the correct position. The function sould return the BST
- takes the given value and creates a node
- checks to see if the BST is empty
- if so, we can just assign the root property to be the node
- otherwise,
- we can create a node to see where we are starting, normally it would be at the root
- have a while loop that runs while true and will have return statements to break out of it
- we want to compare the current node with the new node we created
- if the new node is less than the current node
- we want to check if the current node has a left child already
- if not,
- we assign the left child to the current node left property
- return the binary search tree
- if it has a child,
- we need to reassign the current node to be the current node's left child
- if the new node is greater than the current node
- we want to check fi the current node has a right child already
- if not,
- we assign the right child to the current node's right property
- return the binary search tree
- if it has a right child,
- we need to reassign the current node to be the current node's right child
- Time Complexity for Insert is O(log n) since we have loop that will run at worst case through the entire tree but we cut the tree in half every time we traverse

find()
- this function should find a node in a binary tree. It should return the node if found, otherwise return undefined
- accepts a value and trys to find if the given value is inside the BST
- we will check if the BST is empty
- if so, we can immediately return undefined
- we want to create a variable to represent which node we will be comparing with vs the given value
- have a while loop that runs true
- compare if the given value is equal to the current node
- if so, return the node
- if the value is less than the node
- check if the current node has a left child
- if not, return undefined since we reached the end of this side of the BST
- if so, reassign the current node to be the current node's left child
- if the value is greater than the node
- check if the current node has a right child
- if not, return undefiend since we reach the end of this side of the BST
- if so, reassign the current node to be the current node's right child
- Time complexity O(log n) since we have to loop through the BST but we divide the amount of nodes in half as we loop through

BFS()
- this function should search through each node in the binary search tree using breadth first searc and reutrn an array containing each node's value
- we want to process all nodes on the same level first before we move on to the next level
- we do this by using a queue to remember which nodes we still need to process
- create an array to hold the values of the nodes we need
- create a queue to see which nodes processes first
- initially push the root node onto the queue
- have a while loop that checks for if theres still items in the queue
- pop off a node of the queue
- if the node has a left child, push it onto the queue
- if the node has a right child, push it onto the queue
- push the value of the node onto the return array
- return the return array
- Time Complexity is linear time O(n) since we will be looping through entire BST based on the number of nodes in the BST
- Space Complexity is linear space O(n) since we will have an array based on how many nodes at in the BST

DFSPreOrder ()
- this function should search through each node in the binary search tree using pre-order depth first search and return an array containging each node's value
- with pre order, you want to process itself first, then its left side then its right side
- will be using a traverse helper function to traverse through BST
- so we want to have an array that stores the values of the BST
- create a varaible to represent the current node we are looking at , which starts at the root
- craete helper function that accepts a node
- since we want to process itself first, we push the nodes value onto the values array
- sicne we want to process left side next, if they have a left child, we call the traverse helper function with the left child
- since we want to process right side last, if they have a right child, we call the traverse helper fucntion with the right child
- invoke the helper function with the current node
- return the values array

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
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (newNode === currentNode) return undefined;

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
    if (!this.root) return undefined;

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return currentNode;

      if (value < currentNode.value) {
        if (!currentNode.left) {
          return undefined;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          return undefined;
        }
        currentNode = currentNode.right;
      }
    }
  }

  BFS() {
    const values = [];

    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      const currentNode = queue.shift();

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);

      values.push(currentNode.value);
    }

    return values;
  }

  DFSPreOrder() {
    const values = [];

    const currentNode = this.root;

    const traverse = (node) => {
      values.push(node.value);

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
    };

    traverse(currentNode);

    return values;
  }
}

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(20);
BST.insert(10);
BST.insert(12);
BST.insert(1);
BST.insert(5);
BST.insert(50);

console.log(BST.DFSPreOrder());
