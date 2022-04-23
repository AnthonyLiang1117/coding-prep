/*

Write a function that takes in a non - empty array of integers and returns the maximum sum that can be obtained by summing up all of the ints in an
non empty sub array of the input array.
A subarray must only contain adjacent numbers ( numbers next to each other in the input array


Meant to solve the Maximum subArray problem

Understand:

input: an array
- array made up of unsorted integers
- integers can be both negative or positive

output: a number
- the max sum that can be obtained by summing up all the integers in a subarray of the input

so we want to figure out the max sum of a part of the array
does not matter which part, but we need to figure out how it works

for kadanes algo,
we will be comparing the value of how much the sum is far vs the value at the index

Diagram:
[3 , 5 , -9 , 1]

we will be summing it from the beginning and comparing it if its value
we will be starting off with the first item already
we compare either 3 + 5 or just 5 and take which one is greater => 8
we compared either 8 + -9 or just -9 and take which one is greater => -1
we compared either -1 + 1 or 1 and take which one is greater => 1

we also keep track of what the max is so far at every iteration
max at 1st item is 3 vs 3 => 3
max at 2nd item is 3 vs 8 => 8
max at 3rd item is 8 vs -1 => 8
max at 4th item is 8 vs 1 => 8

so at the end, we return max sum

*/

function kadanesAlgorithm(array) {
  // intialize the totalOfValues as the first item
  let totalOfValues = array[0];

  // initialize the maxValueSoFar as the first item
  let maxValueSoFar = array[0];

  // loop through the array
  for (let i = 1; i < array.length; i++) {
    // compare the totalOfValues + the current value vs just the current value
    totalOfValues = Math.max(totalOfValues + array[i], array[i]);

    // compare the maxValueSoFar vs the totalOfValues
    maxValueSoFar = Math.max(maxValueSoFar, totalOfValues);
  }
  // return max
  return maxValueSoFar;
}

/*
Time Complexity: O(n) since we only loop through the array once with n being the length of the array
Space Complexity: O(1) since we are only accessing and creating primitive data type variables
*/
