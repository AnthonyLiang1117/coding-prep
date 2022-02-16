/*
Restate:
Create a function that does selection sort
where it takes an array and collect the smallest numbers at the beginning
it will go through the array and check to see in each iteration which one is the minimum in the array
once we figure out the minimum, we will swap it to the current index of where the array is

Example:
selectionSort([4,2,6,8,19]) => [2,4,6,8,19]
selectionSort([10,25,13,85,93,2]) => [2,10,13,25,85,93]
selectionSort([9,2,1,4,65,32,42]) => [1,2,4,9,32,42,65]

Approach / Code:
create swap helper function to use for swapping
*/

function selectionSort(array) {
  // create outer loop to loop through every single element in array starting beginning to end
  for (let i = 0; i < array.length; i++) {
    // create a variable for what the index of the minimum currently is at every iteration of bigger loop (normally the current index)
    let minimumIdx = i;
    // create an inner loop to compare the elements in the array
    for (let j = i + 1; j < array.length; j++) {
      // compare the values of the minimum to the value of the current item in the smaller loop
      // if current item is smaller, reassign variable for the index of minimum
      if (array[j] < array[minimumIdx]) minimumIdx = j;
    }
    // swap at the end of the bigger loop if the minimum changed
    if (minimumIdx !== i) swap(array, i, minimumIdx);
  }
  // return sorted array
  return array;
}

function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

console.log(selectionSort([9, 2, 1, 4, 65, 32, 42]));

/*
Time Complexity - O(n^2)
- since we have a nested for loop, that uses the input, input amount of times so thats quadratic time

Space Complexity - O(1)
- since we are only assigning variables with primtiive data types, that is constant space
*/
