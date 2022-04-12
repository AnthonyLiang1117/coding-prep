/*
Question:
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return - 1.

Restate:
Create a function that
accepts 2 input: an array and a number
a rotated array of sorted numbers which is instead of starting with the smallest number to greatest, the lowest number is somewher in the array
that turning point is somewhere
the number is the target number we are trying to find in the array
returns 1 input: a number
the index at where the given target is in the array
if not found in the array, return -1

Edge cases:
is there negative numbers?

Examples:
findRotatedIndex([3,4,1,2], 4) => 1
findRotatedIndex([6,7,8,9,1,2,3,4], 8) => 2
findRotatedIndex([6,7,8,9,1,2,3,4], 3) => 6
findRotatedIndex([37,44,66,102,10,22], 14) => -1
findRotatedIndex([6,7,8,9,1,2,3,4],12) => -1

Approach:
naive search by loop through array to see if there is a match with target

*/

function findRotatedIndex(array, target) {
  // loop through the array to see each value at each index
  for (let i = 0; i < array.length; i++) {
    // compare if the current element is equal to target
    let currentElement = array[i];

    if (currentElement === target) {
      // if so, return index
      return i;
    }
  }

  // if we make it through loop and no match, return -1
  return -1;
}

/*
Time Complexity: O(n)
- since we have a loop dependant on the input, as the input grows, the time complexity will grow linearly to it

Space Complexity: O(1)
- since we are only creating variables with primitive data types, the space complexity for are all constant space

*/

console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));
