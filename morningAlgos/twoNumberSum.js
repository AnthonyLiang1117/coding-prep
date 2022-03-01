/*
Restate:
Create a function that takes
2 INPUTS : an array and a number
the array is made up of distinct integers
the number is the target you want to get by summing 2 numbers
1 OUTPUT: an array
if they found a pair that equals the sum, return an array of the pair that made up the sum
if not found, return an empty array

Edge cases:
is the array sorted?
can the ints inside the array be negative?
cannot add itself together to get sum
the array is not empty
can the array be 1 value only


Examples:
twoNumberSum([1,2,3,4], 5) => [1,4];
twoNumberSum([-1,2,-3,4], -4) => [-1,-3];

Approach:
could use multiple pointer approach but will need to sort array - array.sort() is time of O(nlogn)
could use memoization approach but will be O(n) space
*/

function twoNumberSum(array, targetSum) {
  // sort the array
  array = array.sort((a, b) => a - b);

  // create 2 pointers one for the beginning and one for the end of the array
  let beginning = 0;
  let end = array.length - 1;

  // create a while loop that checks for the beginning pointer being less than the end pointer since we will be checking each number and they cannot be the same number
  while (beginning < end) {
    let sum = array[beginning] + array[end];

    // check to see if the values added together === to the targetSum
    if (sum === targetSum) {
      // if it does, return array of values
      return [array[beginning], array[end]];
    } else if (sum < targetSum) {
      // if its < the targetSum, increment the pointer by 1;
      beginning++;
    } else {
      // if its < the targetSum, increment the pointer by 1;
      end--;
    }
  }
  // if made it through the while loop, return empty array
  return [];
}

/*
Time Complexity: O(n log n)
- since we have to sort our array and we have a while loop that runs, O(n log n + n) => O(nlogn)

Space Complexity: O(1)
- since we are only assigning variables that are primitive types, its constant space
*/

// using memoization approach

function twoNumberSumMemo(array, targetSum) {
  // create an object that will hold the value of the variables we have checked as we go through the array
  let memo = {};

  // have a loop that goes through the whole array to create key value pairs in the object
  for (let elem of array) {
    // create a variable that will hold the value of the difference between target and the current number we are at
    let match = targetSum - elem;

    // if the value is found as a key in the object, return an array of the value and the current number
    if (match in memo) {
      return [match, elem];

      // if its not, create a key value pair for the current number in the object
    } else {
      memo[elem] = true;
    }
  }
  // if it makes it through the array, return empty array
  return [];
}

/*
Time Complexity: O(n)
- since we have 2 seperate for loops, O(2n) cancels out the 2 into O(n);

Space Complexity: O(n)
- since we have to create a variable that holds a reference type like an object, it is o(n) space;
*/
