/*

Write a function that takes in the head of a Singly Linked List and an integer k, shifts the list in place by k positions and returns it new head.
Shifting a LL means moving its nodes forward or backward and wrapping them around the list where appropriate. For example, shifting a linked list forward by one position would make its tail become the new head of the linked list.
Whether nodes are moved forward or backward is detemined by whether k is positive or negative.

*/

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*

Understand:
function that
accepts 2 inputs: a node and a number
the node is the head of a singly linked list
	- that has a value and next property
the number is the amount of places we want to shift the list
	- the number could be negative or positive
returns 1 output: a node
the node is the new head of the singly linked list

since it is a singly linked list
- we need a way to get the length of the list //
- keep track how many moves we are going to move
- figure out the tail node since it will be point to the head //
- make the SLL connection from the tail to the head (given node) //

Diagram:

0 -> 1 -> 2 -> 3 -> 4 -> 5 with k = 2

4 -> 5 -> 0 -> 1 -> 2 - > 3

our new tail will be = the length of the SLL - k - 1; => 3 % length => 3 moves forward
our new head will be = the length of the SLL - k      => 4 % length => 4 move forward

0 -> 1 -> 2 -> 3 -> 4 -> 5 with k = -2

2 -> 3 -> 4 -> 5 -> 0 -> 1

our new tail will be = the length of the SLL - (-2) - 1 => 7 % length => 1 moves forward
our new head will be = the length of the SLL - (-2) 	  => 8 % length => 2 moves forward

*/

function shiftLinkedList(head, k) {
  // create a variable to represent the currentNode we are looking at
  let currentNode = head;

  // create a counter to represent the length of the SLL
  let length = 1;

  // loop through the SLL until we get to the tail
  while (currentNode.next) {
    // increment counter as we go
    length++;

    // move the currentNode forward
    currentNode = currentNode.next;
  }

  // We want to make the LL connect so point tail node's next to head
  currentNode.next = head;

  // we need to grab the newTail so we will calculate the index of where the new tail will be
  let newTail = head;
  let tailIndex = 0;

  k = k % length;

  let tailShift = length - k - 1;

  // loop until the newTail's index (which we will start at 0) is equal to length - k - 1;
  while (tailIndex !== tailShift) {
    // reassign newTail to its next property
    newTail = newTail.next;
    // increment newTail Index
    tailIndex++;
  }

  // create a variable to hold the newHead since the newTail will be pointing at it
  const newHead = newTail.next;

  // reassign newtail'S next property to be null since the tail should be pointing at nothing
  newTail.next = null;

  // return the newHead
  return newHead;
}

/*
Time Complexity : O(n) with n being the length or the number of nodes in the LL
Space Complexity: O(1) constant space
*/
