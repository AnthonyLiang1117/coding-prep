/*
Question:
Implement insertionSort, given an array and an optional comparator function, should sort the values in the array.

Restate:
Create a function that
accepts 1 input: an array
an unsorted array with numbers
returns 1 output: an array
the same array but sorted
Will need to sort it using the insertion method

Examples:
insertionSort([4, 20, 12, 10, 7, 9]) => [4,7,9,10,12,20]
insertionSort([0,-10,7,4]) => [-10,0,4,7]
insertionSort([1,2,3]) => [1,2,3]
insertionSort([]) => []

Approach:
Will always keep the sorted section on the left
we will loop through the entire array and check if the next number is less tahn the current number
if so we will trigger the nested loop
and swap accordingly so it is in the right place

*/

function insertionSort(array) {
  // create a swap helper function
  const swap = (idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };

  // have a for loop that loops throughout the array
  for (let i = 0; i < array.length; i++) {
    // create a variable to hold the current element
    let current = array[i];

    // create a variable to hold the next element
    let next = array[i + 1];

    // if the next element is less than the current
    if (next < current) {
      // we do another for loop that will run from the next elements index to the beginning of the array
      for (let j = i + 1; j >= 0; j--) {
        // if at any point the next element is less than the current element in this loop
        if (array[j] < array[j - 1]) {
          // we swap
          swap(j, j - 1);
        }
      }
    }
  }

  // return array at the end
  return array;
}

/*
Time Complexity: O(n^2)
- since we have a nested loop that is at worst case going to run nth times every iteration, the run time will grow quadraitcally

Space Complexity: O(1)
- since all the varaible we are creating at primitive data types, those are all constant space O(1)
*/

console.log(insertionSort([0, -10, 7, 4]));
