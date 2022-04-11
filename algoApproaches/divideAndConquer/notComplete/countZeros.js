/*
Question:
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeros, which return the number of zeros in the array

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
function countZero(array) {
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
- since we have a for loop that will run depending on how big the input is, will give it a linear time

Space Complexity: O(1)
- since we are only creating variables that have a primitive data type like a number, it will be constant time
*/

console.log(countZero([1, 1, 1]));
