/*
Question:
Given an unsorted array and a number n, find if there exist a pair of elements in the array whose difference is n.
This function should return true if the pair exists or false if it does not

Restate:
create a func that
accepts 2 inputs: an array and a number
a unsorted array of numbers
a target number that is suppose to be the difference of 2 pairs
returns a output: a boolean
returns true if the pair exists
returns false if no pair


Edge cases:
are the numbers unique?
are there negative numbers?

Example:
findPair([6,1,4,10,2,4], 2) => true
findPair([8,6,2,4,1,0,2,5,13], 1) => true
findPair([4,-2,3,10], -6) => true
findPair([6,1,4,10,2,4], 22) => false
findPair([], 0) => false

Approach:
use a frequency map approach
num 1 - num 2 = target
let match = target + num 2

*/

function findPair(array, target) {
  // create a frequency map
  let map = {};

  // loop through the array
  for (let number of array) {
    // create a match variable to represent the number we are looking for
    let match = target + number;

    // check if the match we calculated is a key in the map, if so, that means we already iterated through that number and there is a pair
    // return true
    if (match in map) return true;
    // if there is not a match key in the map, we make a key with the current number we are iterating through
    // to hopefully get this number as a calculated match later
    else map[number] = true;
  }

  // if we make it through the loop, return false
  return false;
}

/*
Time Complexity: O(n) linear time
- since we have a loop that is dependant on the input, as our input grows, our runtime will grow linearly
- accessing keys and values from a object are O(1)

Space Complexity: O(n)
- we have a reference data type that is going to grow depending on how big our input is
*/

console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1));
