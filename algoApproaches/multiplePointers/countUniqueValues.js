/*
Implement a function called countUniqueValues,
which accepts a sorted array and counts the unique values in the array.
There can be negative numbers in the array but it will always be sorted
*/

/*
Restate:
create a funcion that accepts 1 INPUT, a SORTED array, from smallest to largest
count the unique values in the array
numbers can be negative but always sorted
OUTPUT: return the count of unique values
if empty array, return 0

Examples:
countUniqueValues([1,1,1,1,1,2]) => 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) => 7
countUniqueValues([]) => 0
countUniqueValues([-2, -1, -1, 0, 1]) => 4

Approach / Code:
could use Map / frequency counter but that would be space complexity of O(n) and time complexity of O(n)
use multiple pointers for space complexity of O(1)
*/

/*
map / frequency counter approach

const countUniqueValues = (array) => {
  if (array.length === 0){
    return 0
  }

  let map = {};

  for (let element of array){
    map[element] = (map[element] || 0) + 1
  }

  return Object.keys(map).length;
}
*/

// multiple pointers approach

const countUniqueValues = (array) => {
  if(array.length === 0){
    return 0
  }

  // create count to keep track of unique numbers
  let count = 1;

  // create 2 variables to represent the beginning index and the index of the 2nd element in the array
  let beginningIndex = 0;

  // until the index of the 2nd element is at the end of the array:
  for (let currentElementIndex = 1; currentElementIndex < array.length; currentElementIndex++){
    // 1) we want compare the element of beginning index with the elment of the index we are incrementing
    let beginningElement = array[beginningIndex];
    let currentElement = array[currentElementIndex];

    // 2) if they are different, we will increment the counter by 1 and change the beginning index to what the current element is at and then keep going
    if (beginningElement !== currentElement) {
      count++;
      beginningIndex = currentElementIndex;
    }
    // 3) if they are the same, we do nothing
  }

  // return count at the end
  return count
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]))

/*
Time Complexity: O(n)
- since we only go through 1 loop and the rest are arithemtic operations

Space Complexity: O(1)
- since we are only assigning variables with primitive types
*/
