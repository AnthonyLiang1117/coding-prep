/*
Question:
Implement selectionSort, given an array and an optional comparator function, should sort the values in the array.

Restate:
Create a function that
accepts 1 input: an array
a unsorted array of numbers
returns 1 input: an array
the same array but sorted

Examples:
selectionSort([4, 20, 12, 10, 7, 9]) => [4,7,9,10,12,20]
selectionSort([0,-10,7,4]) => [-10,0,4,7]
selectionSort([1,2,3]) => [1,2,3]
selectionSort([]) => []

Approach:
utilizing the selection sort method
where you iterate through the array
look for the index at which the smallest number current is
swap with the current element at each iteration at the end

*/

function selectionSort(array) {
  // create a swap helper function
  const swap = (idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };

  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // create a variable that will hold the index of the smallest value as the current index in the bigger loop initially
    let minimumIndex = i;

    // create a nested loop to compare the current element in the bigger loop with each of the other elements in the array
    for (let j = i + 1; j < array.length; j++) {
      // compare the values of the smallest value with current value of the inner loop
      // if the current value of inner loop is smaller
      if (array[minimumIndex] > array[j]) {
        // reassign index of smallest value to be the current index of the inner loop
        minimumIndex = j;
      }
    }
    // after we finish the nested loop
    // if the index of the smallest value is not equal to the index we are current at in the bigger loop
    if (minimumIndex !== i) {
      // we swap
      swap(i, minimumIndex);
    }
  }

  // return the array at the end
  return array;
}

/*
Time Complexity: O(n^2)
- since we have nested loop, as the inputs grow, the runtime will grow quadractially so O(n^2)
- assigning and accesing are all O(1) constant time

Space Complexity: O(1)
- all the variable we are creating are primtive data type take constant space O(1)
*/

console.log(selectionSort([4, 20, 12, 10, 7, 9]));
