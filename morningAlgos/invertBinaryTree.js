/*

Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its correspodning right node.
Each binary tree node has a int value, a left child node and a right child node.
Children nodes can either be Binary Tree nodes themselves or None / null.

Understand:

input: a node
- the head of a binary tree

output: a node
- the same BT but have the the tree inverted

inverted tree means the the function should go to every node in the tree
and swap the value of the left node for its right node

since it is a binary tree, we do not need to worry that the numbers are in the right place
since BT's only rule is that they have at most 2 children

unlike the BST where the left child has to be smaller than the value of the node itself
and where the right child has to be bigger than the value of the node itself

unliked the binary heap where the 2 children either have to be both smaller or larger
than the value of the node itself

to traverse the binary tree, we can use a breadth first search approach
where we go from level to level
using a queue to represent what we still need to process
queue is a FIFO data structure so we add to the back and pull from the front

initialize a queue with the given node in it
have a while that runs while there is something in the queue
grab an item from the queue
do the action we need to do
push its children onto the tree


*/

function invertBinaryTree(tree) {
  const queue = [tree];

  while (queue.length) {
    const currentNode = queue.shift();

    [currentNode.left, currentNode.right] = [
      currentNode.right,
      currentNode.left,
    ];

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return tree;
}

/*
Time Complexity: O(n) with n being the number of nodes in the binary tree
Space Complexity: O(n) since we will be creating a queue that will store every node at least once
*/

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
