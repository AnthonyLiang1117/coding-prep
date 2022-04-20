/*
Write a function that takes in a BST and a target integer value and returns the closest value to that target value contained in the BST.
You can assume there will only be one closest value.

Understand:
function that

accepts 2 inputs: A node and a int
- the node would be the first node aka the root in the BST
- the int will be a target number that we want to find the closest number to it to be

returns 1 output: a number
- the value of a node that is closest to our target node

we will need traverse the the BST and try to move through the tree until we either
hit the number that is our target or we cannot go any further down

- we will need to keep track of the node that we last encounter until we hit the no children
- we need to keep track of the node that has the closest value with the target

Diagram / Psuedo Code :
- since we start at top node, we will compare the current to the target
- if the difference between the closest node and target is > the difference between the currentNode and target), we reassign closest with current
- if its smaller,
-	we can either
	- traverse down to the left if it has a left child
	- or return the value of the closestNode since we cannot go down any more
- if its higher, we will traverse down to the right
	- traverse down to the right if it has aright child
	- or return the value of the closestNode since we cannot go left any more

*/

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let currentNode = tree;
  let closest = Infinity;

  while (true) {
    if (currentNode.value === target) return currentNode.value;

    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      if (!currentNode.left) {
        return closest;
      }
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      if (!currentNode.right) {
        return closest;
      }
      currentNode = currentNode.right;
    }
  }
}

/*
Time Complexity : O(log n) logarathic time with n being the number of nodes in the BST
Space Complexity: O(1) constant space
*/

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
