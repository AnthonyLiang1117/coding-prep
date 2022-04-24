/*

Given two non - empty arrays of integers, write a fucntion that determines whether the second array is a sub sequence of the first one
a subsequence of an array is a set of numbers that arent necessarily adajcent in the array but that are in the same order as they appear in the array.

Understand:
inputs: 2 arrays
- first array is the bigger array that has the numbers in it
- second array is the smaller sub array with the numbers that need to be inside first array

output: boolean
- true if the numbers come up in the same order in both 1st and 2nd array
- false if the numbers do not come up in same order

both are not sorted but for the algorithm to come back as true
- we need all the numbers in the 2nd array to show up in the 1st array
- while also showing up in the same order that the 2nd array has them in

we can use 2 pointers to represent where we are at in the loops
1 pointer for where we are in the 1st array
1 pointer for wher ewe are in the 2nd array

if we make it through the 2nd array, that means that we have seen all the numbers in the 2nd array
and can return true

in our loop, we can check for if the number at pointer 1 equals to the number at pointer 2,
if so, we will increment the 2nd pointer forward
if not ,we only increment the 1st pointer forward

if we get through loop,
we can check if the 2nd pointer is equal to the length of the array,
if so, return true, if not return false
*/

function isValidSubsequence(array, sequence) {
  let arrayPointer = 0;
  let sequencePointer = 0;

  while (arrayPointer < array.length) {
    if (array[arrayPointer] === sequence[sequencePointer]) {
      sequencePointer++;
    }

    arrayPointer++;
  }

  return sequencePointer === sequence.length ? true : false;
}

/*
Time Complexity: O(n) with n being the length of the big array
Space Complexity: O(1) since our variable are all primtive data types like numbers
*/
