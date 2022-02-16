/*
Restate:
Create a function that does bubble sort given an array of numbers
where goes through the array and for each iteration,
it will check to see if the element in the current index is bigger than the next one
if it is, it will swap, if not, it will keep going until the biggest number is at the end
each iteration will keep going and eventually move the biggest numbers to the end

Examples:
bubbleSort([4,2,6,8,19]) => [2,4,6,8,19]
bubbleSort([10,25,13,85,93,2]) => [2,10,13,25,85,93]
bubbleSort([9,2,1,4,65,32,42]) => [1,2,4,9,32,42,65]

Approach / Code:
create a seperate function for swapping
add a noswap variable for optmiziation
*/

function bubbleSort(array) {
  // create variable for whether we swapped or not
  let noSwap;
  // create outer loop that starts from the end to the beginning of the array
  for (let i = array.length; i > 0; i--) {
    // set noSwap to be true;
    noSwap = true;
    // create inner loop that starts from the beginning til i - 1
    for (let j = 0; j < i - 1; j++) {
      // if the value at the current index of the inner loop is greater than value at the next index of the inner loop, swap
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        // if swap happens, set noSwap as false
        noSwap = false;
      }
    }

    // if no swap has occured through the whole loop, means that the array is sorted and we can break out of bigger loop
    if (noSwap) break;
  }
  // return sorted array
  return array;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(bubbleSort([4, 2, 6, 8, 19]));

/*
Time Complexity: O(n^2)
- since we are using a nested loop, that is using the input , input amount of times so thats quadratic time

Space Complexity: O(1)
- since most of the time we can just assigning variables with primitive types and we are not creating copies of arrays, its constant space
*/
