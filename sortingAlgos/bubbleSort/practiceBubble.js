/*
Question:
Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array
This function takes 2 parameters: an array and an option comparator function

Restate:
function that takes
1 input: an array
an unsorted array made up of integers
returns
1 output: an array
the same array but sorted in a bubble sort way

Examples:
bubbleSort([4, 20, 12, 10, 7, 9]) => [4,7,9,10,12,20]
bubbleSort([0,-10,7,4]) => [-10,0,4,7]
bubbleSort([1,2,3]) => [1,2,3]
bubbleSort([]) => []
where it starts at the beginning of the array

Approach:
Has to use the bubble sorting algo
where you start from the beginning and compare everything from left to right
if the current number you are iterating through is greater than the next one, you swap
create a swap helper function
*/

function bubbleSort(array) {
  // swap helper function
  const swap = (idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };

  // have a loop that runs through the entire array from the end to the front since we will be collecting everthing at the end of the array
  for (let i = array.length; i > 0; i--) {
    // have a second loop that runs through the array from the beginning that runs until when the first array is running - 1
    for (let j = 0; j < i - 1; j++) {
      // create a variable that will hold the value of element we are current looking at
      let current = array[j];

      // create a varaible that will hold the value of the element we are comparing it to
      let compare = array[j + 1];

      // if the current element is bigger than the comparor,
      if (current > compare) {
        // we swap them
        swap(j, j + 1);
      }
    }
  }
  // return array at the end
  return array;
}

/*
Time Complexity: O(n^2)
- since we have a nested loop, that makes our time group quadratically as the input grows so quadractic time O(n^2)
- inside our nested loop, we are making assignments by accessing values in arrays which is O(1)

Space Complexity: O(1)
- since we are only creating primtive data type varaibles, its is constant space O(1)
*/

console.log(bubbleSort([0, -10, 7, 4]));
