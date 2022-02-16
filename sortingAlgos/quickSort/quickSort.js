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

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  // pick a pivot (the index) that we will use to determine where everything else in the array should be, for now it will be first element
  // we initialzed in the arguments

  // create a counter that tracks how many numbers are less than the pivot starting from the pivotidx
  let counter = pivotIndex;

  // loop through array, we can start at 1 since we already using the first element as the pivot element
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
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
      swap(array, i, counter);
    }
  }
  // once we are out of the loop, we will use the counter and swap places with the pivot and the counter
  swap(array, pivotIndex, counter);

  // return the index of where the pivot is now aka the counter
  return counter;
}

function quickSort(array, left = 0, right = array.length - 1) {
  // create base case that checks when the left pointer and right pointer of the sub array are equal to each other or if the right is less than the left
  if (left < right) {
    // calls the pivot helper function and returns that index
    let pivotIdx = pivot(array, left, right);

    // recusrively quickSort on both the left side of the array and the right side
    quickSort(array, left, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, right);
  }
  // return sorted array in the end
  return array;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));

/*
Time complexity: O(n^2)
- since depending on the input, we need to do n number fo decompostions and per decomposition, we have to make a comparsion n number of times
- O(n * n) => O(n^2)

*/
