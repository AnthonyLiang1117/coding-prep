/*
Restate:
Create a function that accepts an array and a value. an array of numbers and a value a number. If the value given is in the array, return the index of the position it is in. If it is never found return - 1. Make your own version of the array method, indexOf().

Example:
linearSearch([1,4,3], 1) => 0
linearSearch([1,4,3], 3) => 2
linearSearch([1,4,3], 9) => false

Approach / Code:
*/

function linearSearch(array, value) {
  // loop through array
  for (let i = 0; i < array.length; ++i) {
    // if the current element we are on equals to the value, return the index
    let element = array[i];
    if (element === value) return i;
  }
  // if we make it to the end of loop, return -1
  return -1;
}

console.log(linearSearch([1, 4, 3], 9));
