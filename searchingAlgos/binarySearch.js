/*
Restate:
create a function binarySearch, that takes an array and a value youre looking for.
array is sorted
Return the index if the value is found in the array or return -1 if not

Example:
binarySearch([1,2,3,4,5], 5) => 4;
binarySearch([1,2,3,4,5], 2) => 1;
binarySearch([1,2,3,4,5], 6) => -1;

Approach / Code:
*/

function binarySearch(array, value) {
  // create 2 pointers that represent the beginning of the array and the end of the array
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  // create a while loop that checks for when left is bigger than right index
  while (array[mid] !== value && left <= right) {
    // find a mid point in the index where those 2 pointers are
    // check if that mid point value is equal to the value we are looking for
    if (array[mid] < value) {
      // if mid point value is < value we are looking for, reassign left pointer to the mid point
      left = mid + 1;
    } else if (array[mid] > value) {
      // if mid point value is > value we are looking for, reassign right pointer to the mid point
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }
  // if it makes it through the loop, if yes, return index,  return -1
  return array[mid] === value ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 8));

/*
Time Complexity: O(log n)
- since we mainly have 1 while loop but we are also cutting the input in half every time, it is lograimthic time since the while loop is based on the size of the input

Space Complexity: O(1)
- since we are only assigning variable with values of primitive types, its constant space
*/
