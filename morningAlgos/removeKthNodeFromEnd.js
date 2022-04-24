class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*

Write a function that takes in the head of a SLL and an integer k and removes the kth node from the end of the list
The removal should be done in place, meaning that the oriignal datat strucutre should be mutated
If the head is the node we need to remove, your function should simply mutate its value and next pointer.

inputs: a node and a number
- the node is the head node of SLL
- the number is the kth node from the end of the SLL

output: a node
- the same input head that was returned

if the head node is the one we need to remove,
we need to just reassign the value and the next pointer

objective:
to remove the node at the given position from the back


 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> null with k being 4

 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> null the node with the 6 is the one we are removing
10	  9	   8	  7    6	  5    4    3    2    1
 	   	    	        	    i                   j
 i                   j
if 6 is the one we are removing, since we are in a SLL,
we need to find the node right before it to remove it from the SLL

we can have a 2 pointers,
one pointer can point at where we are starting
2nd pointer can be ahead so that it hits the end of the LL first
since we know the 1st pointer has to be k positions before the last node

have counter to match how many steps the kth node needs to be from the back
have a while loop that runs for when the 2nd pointer's nexst property is still a node
during that time, if the counter does not equal to k,
- only move the 2nd pointer
- else, we move both pointers forward

once we do that, we should get the 1st pointer to point at the node
that is right before the node we want to remove

*/

function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;
  let counter = 0;
  let length = 1;

  while (second.next) {
    if (counter !== k) {
      second = second.next;
      counter++;
    } else {
      first = first.next;
      second = second.next;
    }
    length++;
  }

  if (length === k) {
    let newHead = head.next;

    head.value = newHead.value;
    head.next = newHead.next;

    return head;
  }

  let removeNode = first.next;

  first.next = removeNode.next;

  return head;
}

/*
Time Complexity: O(n) with n being the number of nodes in the SLL
Space Complexity: O(1) with our variables just being assigned values
*/
