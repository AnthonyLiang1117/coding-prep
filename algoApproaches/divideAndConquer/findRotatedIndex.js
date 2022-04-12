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
do the numbers repeat?

Examples:
findRotatedIndex([3,4,1,2], 4) => 1
findRotatedIndex([6,7,8,9,1,2,3,4], 8) => 2
findRotatedIndex([6,7,8,9,1,2,3,4], 3) => 6
findRotatedIndex([37,44,66,102,10,22], 14) => -1
findRotatedIndex([6,7,8,9,1,2,3,4],12) => -1

Approach:
linear search by loop through array to see if there is a match with target

*/

/*
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

Time Complexity: O(n)
- since we have a loop dependant on the input, as the input grows, the time complexity will grow linearly to it

Space Complexity: O(1)
- since we are only creating variables with primitive data types, the space complexity for are all constant space

*/

/*
Optimizied Solution:
Use divide and conquer to find the pivot point
since the array is sorted, when we pick the middle point in the graph, there is always at least going to be one side that is sorted
we can check whether the key is in the left half or the right half

*/

function findRotatedIndex(array, target, left = 0, right = array.length - 1) {
  // have a while loop that checks when the left pointer becomes greater than the right pointer
  while (left <= right) {
    // grab the mid point of the array
    let mid = Math.floor((left + right) / 2);

    // if value at the midpoint is equal to the target
    // return the index of midpoint
    if (array[mid] === target) return mid;

    // check whether the left side (from 0 to midpoint) or the right side (midpoint + 1 to end of array) is sorted
    // if the left side is sorted
    if (array[left] < array[mid]) {
      // check to see if the target is within the boundaries of the values on the left side
      // if so,
      if (array[left] <= target && target <= array[mid]) {
        // move the right pointer in since we are shrinking the search to be looking at the left side
        right = mid - 1;

        // if it is not in the boundaries of the left side,
      } else {
        // move the left pointer in since we are shrinking the search to be looking at the right side
        left = mid + 1;
      }

      // if the left is not the sorted side
    } else {
      // check to see if the target is within the boundaries of the values on the right side
      // if so,
      if (array[mid] <= target && target <= array[right]) {
        // move the left pointer in since we are shrinking the search to be looking at the right side
        left = mid + 1;

        // if the target is not within the boundaries,
      } else {
        // move the right pointer in since we are shrinking the search to be looking at the left side
        right = mid - 1;
      }
    }
  }
  // if we make it through the look, that means we did not find the target in the array and return -1
  return -1;
}

/*
Time Complexity: O(log n)
- since we are dividing our input in half during every loop cycle, the run time will logarithmicly grow as the input grows

Space Complexity: O(1)
- since all of the variable are all primitive data types like numbers they are all constant space
*/

console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 10));
