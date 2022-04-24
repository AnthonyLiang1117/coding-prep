/*

Write a function that takes in a sorted array of integers as well as a target integer.
The function should use hte Binary Search algo to determine if the target int is contained in the array
and should return its index if it is, otherwise -1.

understand:

input: an array and a number
- the array is of integers sorted
- the number is the target number we want to check if is in the array

output: an number
- return the index of the position of the target number if its in the array
- return -1 if its not

binary search
- utilizing the midpoint of the array to try to split the array in half every time
	so we can ultimiately find the array in log n time
- midpoint will eventually become the number if we end up finding it

since the array is sorted,
we can use 2 pointers to represent where we are at
in the while loop, it will continue to check for when these 2 pointers are less or equal to each other
we will then find the midpoint using the 2 pointers
check if the given value is less than the value at the midpoint,
if so, we will move the right pointer in so that we can only look on the left side
check if hte given value is more than the value at the midpoint,
if so, we will move the left pointer in so that we can only look at the right side
else if the the value is equal to value at the midpoint, we return the midpiint

once we are out of the loop, that means the number is not in the array and return -1
*/
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const midpoint = Math.floor((left + right) / 2);
    console.log(midpoint);

    if (target < array[midpoint]) {
      right = midpoint - 1;
    } else if (target > array[midpoint]) {
      left = midpoint + 1;
    } else {
      return midpoint;
    }
  }

  return -1;
}

/*
Time Complexity: O(log n) with n being the length of the array
- log n since we are divide the array in half at every iteration
Space Complexity: O(1) since we did it iteratively, we are not using the call stack
- only craeting variables and reassign variables with primtive data type
*/
