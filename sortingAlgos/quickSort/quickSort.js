/*
Restate:
create function that implements quick sort algorithm

Example:
quickSort([4,2,6,8,19]) => [2,4,6,8,19]
quickSort([10,25,13,85,93,2]) => [2,10,13,25,85,93]
quickSort([9,2,1,4,65,32,42]) => [1,2,4,9,32,42,65]

Approach / Code:
Can split it up into mulitple steps
create a pivot helper function to re arrange the array based on the pivot we pick
create swap function to swap the values in the pivot function
*/

function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

function pivot(array) {
  // pick a pivot (the index) that we will use to determine where everything else in the array should be, for now it will be first element
  let pivotIndex = 0;

  // create a counter that tracks how many numbers are less than the pivot
  let counter = 0;

  // loop through array
  for (let i = 0; i < array.length; i++) {
    // based on the value of the pivot
    let currentElem = array[i];
    let pivotElem = array[pivotIndex];
    // if the current element is greater than value of the pivot
    // keep it there
    // if the current element is less than the pivot,
    if (currentElem < pivotElem) {
      // we want to increment the counter
      counter++;

      // swap the values of the current element and the value to the right of the pivot or to right of the most recently swapped element
      swap(array, i, pivotIndex + counter);
    }
  }
  // once we are out of the loop, we will use the counter and swap places with the pivot and the counter
  swap(array, pivotIndex, counter);

  // return the index of where the pivot is now aka the counter
  return counter;
}

console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));
