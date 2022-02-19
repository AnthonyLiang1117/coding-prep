/*
Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

Restate:
create a function that accepts
2 INPUTS: an array and a number
the array has n amount of integers and are sorted least to greatest
the number is the target you want to get when 2 different numbers in the array add up to each other

Examples:
pairSum([1,2,3], 4) => true;
pairSum([-1, 2, 3, 4], 3) => true;
pairSum([-3,-1,0,3,4], 8) => false;
pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
pairSum([1, 2, 3, 4, 5], 10) -> false
pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
pairSum([1, 2, 3, 7, 8], 7) -> false
pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
pairSum([1, 2, 3, 4, 5], 2) -> false

Approach:
using mulitple pointer method, since its sorted, you can start at the beginning and the end and add those together
*/

function pairSum(array, target) {
  // create 2 pointers, one that starts at the beginning and one that starts at the end
  let beginning = 0;
  let end = array.length - 1;

  // create a while loop that keeps going while the beginning pointer is less than end pointer
  while (beginning < end) {
    // check to see if the values added together are higher or lower than target
    let sum = array[beginning] + array[end];

    // if higher, decrement the end pointer since we need to eventually break out of loop
    if (sum > target) end--;
    // if lower, increment the beginning pointer since we need to eventually break out of loop
    else if (sum < target) beginning++;
    // if equal, return true,
    else return true;
  }
  // if we make it through the loop, return false
  return false;
}

console.log(pairSum([1, 2, 3, 4, 5], 2));

/*
Time Complexity: O(n)
- since we have one while loop that depends on how big our input is, that is linear time O(n)

Space Complexity: O(1)
- since we are only creating variables that hold primtive data types, that is constant time O(1)
*/
