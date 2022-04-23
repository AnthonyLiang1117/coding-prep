/*

Youre given the head of a SLL whose nodes are in sorted order with respect to their values.
Write a function that returnns a modified version of the LL that doesnt contain any nodes with duplicate values.
The linked list should be modified in place and the modified linked list should still have its nodes sorted with respect to their values.

understand:

inputs: a node
- the node is the head of a SLL
- SLL are made up of nodes with just 1 pointer that points to the next

output: a node
- the head of the same LL that we modified

objective:
we want to remove all the duplicate values of a linked list so that there is only
1 node of each unique value in the list

nodes are also sorted in ascending order so from least to greatest
we need a way to keep track of the values we already have seen

to remove a node from a SLL:
we have to grab the node previous so that we can remove it by pointing
the previousNode's next to be the currentNodes.next so that we remove that one link
while keeping the SLL going

since the nodes are sorted from ascending order
- we can do a while loop that will continue to look until we find the number that does not
	equal to the number before
- one pointer to keep track of where we are in traversal
- 2nd pointer to look ahead to see what the numbers
- the 2nd pointer will keep moving until it gets to a value that doesnt equal the first pointer


- for example
1 -> 1 -> 1 -> 3
i    j
1 -> 1 -> 1 -> 3
i           j
1 -> 1 -> 1 -> 3
i              j

once it hits a number that does not equal the 1st pointer, the while loop will break
and we can reassign the i's next property to be j


Diagram:

1  -->     1     -->   3

prev   current current.next

1         -->      3
prev.next => current.next
*/

function removeDuplicatesFromLinkedList(linkedList) {
  // have a pointer to keep track of the node we are looking at
  let currentNode = linkedList;

  // have a while loop that runs while the pointer is not null
  while (currentNode) {
    // create a variable to represent the next pointer we are comparing with
    let nextDifferentNode = currentNode.next;

    // have another while loop that checks for if the value of next is equal to value of current
    while (
      nextDifferentNode !== null &&
      nextDifferentNode.value === currentNode.value
    ) {
      // move it forward so we can eventually reach a next pointer with a different value
      nextDifferentNode = nextDifferentNode.next;
    }
    // after we break out of loop,
    // point our current node to point at our next node to eliminate the duplicates
    currentNode.next = nextDifferentNode;

    // need to keep the bigger loop running so we reassign current node to keep moving forward
    currentNode = currentNode.next;
  }

  // return the linked list
  return linkedList;
}

/*
Time Complexity: O(n) with n being the number of nodes in the LL
- it is still O(n) even tho we have 2 while loop because we are not going to be looping over
	any of the nodes twice, each loop will only loop over sections of the LL
- the nodes that we loop over in the inner while loop will shorten the LL so the bigger loop does
	not go over them

Space Complexity: O(1) since all we are doing are rassigning variables;
*/
