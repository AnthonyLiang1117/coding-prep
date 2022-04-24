/*

Youre given two linked lists of potentially unequal length. Each linked list represnts a non negative int,
where each node in the Linked list is a digit of that integer, and the first node in each LL always reprents the least signficant digit of the integer
write a function that returns the head of a new LL that reprents the sum of the ints represented by the two input LL.

understand:

inputs:
2 different linked lists with potentially unequal lengths
first node in the integers repretns the ones position in a number

the value of each linked list can only be 0 -> 9
so if the number goes above 9, we need to carry the 1 over

output:
return the head of the new linked list with the sum of hte 2 values

node1 + node2 + carry = new Node
  2	      9       0  => 11 => 1

	4  +	  4   +   1  =>  9

	7  +	  5   +   0  => 12 => 2

	1  +	  0   +   1   => 12 => 2


create 2 pointers that represent where we are looking at for the linkedlists
create a pointer to represent the new linked list we are creating
initialize a carry pointer
since we need to account for if we have a carry over from last iteration
have a while loop that runs when either one is not null
initialize the 2 value pointers
since we need to account for if one of the linked list has ended
sum up the values together and check for if its larger than 9
if so, reassing sum to be % of sum
and reassign carry to be 1
else, assign carry to be 0
create a new Node with the sum

*/

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let pointer1 = linkedListOne;
  let pointer2 = linkedListTwo;
  let newLinkedList = null;
  let newLLPointer = null;
  let carry = 0;

  while (pointer1 || pointer2 || carry > 0) {
    let value1 = 0;
    let value2 = 0;

    if (pointer1) value1 = pointer1.value;
    if (pointer2) value2 = pointer2.value;

    let sum = value1 + value2 + carry;

    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    } else {
      carry = 0;
    }

    const newNode = new LinkedList(sum);

    if (!newLinkedList) {
      newLinkedList = newNode;
      newLLPointer = newLinkedList;
    } else {
      newLLPointer.next = newNode;
      newLLPointer = newLLPointer.next;
    }

    if (pointer1) pointer1 = pointer1.next;
    if (pointer2) pointer2 = pointer2.next;
  }

  return newLinkedList;
}

/*
Time Complexity: O(n or m)
- depending on which LL had more number of nodes
- carry does not matter much since it is only an extra iteration compared to n or m

Space Complexity: O(1)
- since we only had primtiive data type variables
*/
