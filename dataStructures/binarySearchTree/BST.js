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
}

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(20);
BST.insert(10);
BST.insert(12);
console.log(BST.find(43));
