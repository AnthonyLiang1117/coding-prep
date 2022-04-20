// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
Understand:
function that
accepts 1 input: a node
- the node is the head of a BT
- Binary Tree is a tree that starts a root and has at most 2 child
returns 1 output: an array
- the array is made up of branch sums
- branch sums are the sum of all values in a BT branch.
- from the root to the end of any leaf node
- the array is ordered in a way that is from left most to right most branch
using Depth first search Pre Order to move through Binary Tree
have a counter that keeps track of the sum of the nodes as we pass them


Diagram:
1 + 2 + 4 + 8 = 15; Depth First Search Pre Order (A , L , R)
1 + 2 + 4 + 9 = 16;
1 + 2 + 5 + 10 = 18;
1 + 3 + 6 = 10;
1 + 3 + 7 = 11;

Psuedo Code:
need an array to collect our branchSums
recursion helper function(node, counter)
- base case if (!node) push counter onto array
- do our logic
  - counter += node.value
  - once we get to a leaf (a node with no left or right child), we want to collect the counter in our array
- recursive call if they have a left child, helper function (left child, counter)
- recursively call if they have a right child, helper function (right child, counter)

*/

function branchSums(root) {
  const results = [];
  let counter = 0;

  function traverse(node, counter) {
    counter += node.value;

    if (!node.left && !node.right) {
      results.push(counter);
    }

    if (node.left) traverse(node.left, counter);
    if (node.right) traverse(node.right, counter);
  }

  traverse(root, counter);

  return results;
}

/*
Time Complexity: O(n) linear time with n being the number of nodes in the binary tree
Space Complexity: O(n) linear space with n being the number of nodes in the binary tree
*/
