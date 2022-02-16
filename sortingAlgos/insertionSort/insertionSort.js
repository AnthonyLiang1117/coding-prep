/*
Restate:
create function that does insertion sort
where we take an array and have a portion of it that is always sorted
we will iterate through the array and if that element is out of place, we will see where it belongs in sorted portion
until we get to the very end of the arrray

Example:
insertionSort([4,2,6,8,19]) => [2,4,6,8,19]
insertionSort([10,25,13,85,93,2]) => [2,10,13,25,85,93]
insertionSort([9,2,1,4,65,32,42]) => [1,2,4,9,32,42,65]

Approach / Code:
*/

function insertionSort(array) {
  // loop through array and start at the 2nd item in the array to compare it with the first item
  for (let i = 1; i < array.length; i++) {
    // as we go through the array, if the current value is less the value before,
    if (array[i] < array[i - 1]) {
      // we will loop again from the current index to the end of the array
      for (let j = i; j > 0; j--) {
        // we will check if the current element is less than the element before it, and if it is, we swap
        if (array[j] < array[j - 1]) {
          swap(array, j - 1, j);
        }
      }
    }
  }
  // return array
  return array;
}

function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

console.log(insertionSort([9, 2, 1, 4, 65, 32, 42]));

/*
Time Complexity: O(n^2)
- since we have a nested loop, we need to make n number of comparsions on n number of inputs which is quadratic time

Space Complexity: O(1)
- since we only create variables with primtive types
*/
