/*
Question:
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which return the number of zeros in the array

Restate:
create a function that has
1 input: an array
made up for 1s and 0s
sorted in a descending order
and returns
1 output: a number
the amount of 0s in the array

Examples:
countZeros([1,1,1,1,0,0]) => 2
countZeros([1,0,0,0,0]) => 4
countZeros([0,0,0]) => 3
countZeros([1,1,1,1]) => 0

Edge cases:
what if the array is empty? i would assume return 0

Approach:
Can loop through entire array and have a frequency counter that keeps check of how many 0s there are
would have a Time Complexity of O(n) since we have a loop that will run as long as how big the input is

*/

/*
function countZeroes(array) {
  // create a variable to hold the counter of how many 0s there are
  let counter = 0;

  // create a for loop that iterates through out the array
  for (let element of array) {
    // if the current element is equal to 0
    if (element === 0) {
      // increment the counter by 1
      counter++;
    }
  }
  // return the counter
  return counter;
}

Time Complexity: O(n)
- since we have a for loop that will run depending on how big the input is, will give it a linear time O(n)
- we are accessing values from an array which is constant time O(1)
- we are doing basic operations like + , - and = so that is constant tiem also O(1)

Space Complexity: O(1)
- since we are only creating variables that have a primitive data type like a number, it will be constant time O(1)
*/

/*

Optimized Approach:
Since the array is sorted, we can use divide and conquer
where we will keep halfing the array and moving the midpoint
until we find the number that has a left number of 1
since that will signal when the zeros start happening

*/

function countZeroes(array) {
  // create 2 pointers that will represent the index of the beginning and the end
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  // have a while loop that will check for when the left pointer is less than or equal to the right pointer
  while (leftPointer <= rightPointer) {
    // calculate the index of the midpoint
    let midpoint = Math.floor((leftPointer + rightPointer) / 2);
    console.log('MIDPOINT', midpoint);

    // check if the value of the midpoint is equal to 0 && the value at the index to the left of the midpoint is equal to 1
    // if it is checks out,
    if (
      array[midpoint] === 0 &&
      (array[midpoint - 1] === 1 || midpoint === 0)
    ) {
      // return the length of the array subtracted by the index of the midpoint since that will let us know how many 0s there are
      return array.length - midpoint;
    }

    // if value of the midpoint equal 0,
    if (array[midpoint] === 0) {
      // we know the number will be something to the left of it so we move the right pointer to be the midpoint - 1 to shrink area
      rightPointer = midpoint - 1;

      // else if the value of midpoint equals  1,
    } else if (array[midpoint] === 1) {
      // we know the number will be something to the right of it so we move the left pointer to be hte midpoint + 1 to shrink area we are looking for
      leftPointer = midpoint + 1;
    }
  }
  // if we break out of the loop and there is nothing returned,
  // return 0 for 0 zeros
  return 0;
}

/*
Time Complexity: O(log n)
- since we are dividing our input by half everything time we are running the loop, it is logarithmic time O(log n)
- we are accessing values from an array which is constant time O(1)
- we are doing basic operations like + , - and = so that is constant time also O(1)

Space Complexity: O(1)
- since we are only creating primitive data type variables, that is constant space O(1)
*/

console.log(countZero([1, 0, 0, 0, 0]));
