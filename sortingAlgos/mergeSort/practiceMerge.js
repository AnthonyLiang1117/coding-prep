/*

Question: sort this array using merge sort

Restate:
accepts an unsorted array
returns a sorted using merge sort prinicples

Edge case:
are the numbers in the arrays repeated?
are there repeat of numbers on the each array?

Approach:
create a helper function that does the merging of 2 SORTED arrays
we will split the given array in left and right
while calling the mergeSort() on both the left and right parts
we will then return the result of the merge helperfunction with the left and right parts

merge helper function:
merge([1,3,4,5], [2,4,6,8]) => [1,2,3,4,4,5,6,8]
merge([-2,-1,0,4,5,6], [-3,-2,-1,2,3,5,7,8]) => [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
merge([3,4,5], [1,2]) => [1,2,3,4,5]

*/

function merge(array1, array2) {
  // create an array that we will push the values onto so we not messing with the original array
  const result = [];

  // create a counter for both array 1 and array 2
  let array1Counter = 0;
  let array2Counter = 0;
  let array1Element;
  let array2Element;

  // have a while loop that checks for when the counter of array 1 and array 2 is still less than the lengths of both arrays
  while (array1Counter < array1.length && array2Counter < array2.length) {
    array1Element = array1[array1Counter];
    array2Element = array2[array2Counter];

    // compare if the element in the 1st array is less than or equal to the element in the 2nd array
    if (array1Element <= array2Element) {
      // if so, push the value of the 1st array onto the results array and increment counter
      result.push(array1Element);
      array1Counter++;

      // if not, push the value of the 2nd array onto the results array and increment counter
    } else {
      result.push(array2Element);
      array2Counter++;
    }
  }

  // to make sure we did leave anything else that we need to push onto the results array
  // have while loop that pushes the rest of the array 1 elements onto the array
  while (array1Counter < array1.length) result.push(array1[array1Counter++]);

  // have a while loop that pushes the rest of the array 2 elements onto teh array
  while (array2Counter < array2.length) result.push(array2[array2Counter++]);

  // return the results array
  return result;
}

/*
Time Complexity: O(n + m)
- since we have 2 loops that are running dependant on the 2 seperate inputs we have, as the inputs grow, the run time will grow with it

Space Complexity: O(n + m)
- since we are adding all the values of the 2 input arrays we have, the array variable we created will grow depending on how our 2 input arrays grow

*/

function mergeSort(array) {
  // base case that will help us eventually break out of the recursion
  if (array.length <= 1) return array;

  // figure out the midpoint of the array
  let midpoint = Math.floor(array.length - 1 / 2);

  // split the array into a left while calling the mergeSort function on the left part
  let left = mergeSort(array.slice(0, midpoint));

  // and a right while calling the mergeSort function on the right side
  let right = mergeSort(array.slice(midpoint));

  // return the result from our merge helper function with the left and right sides
  return merge(left, right);
}

/*
Time Complexity: O(n log n)
- since we are dividing the input in half every time the fucntion is called, there is O(log n)
- we are going to be making nth number of comparsions per merge in the worst case

Space Complexity: O(n)
- since for merge sort to work, we have to break up the array into sub arrays with only 1 element in it so that means its create nth number of arrays
- arrays are reference data types

*/

console.log(mergeSort([4, 20, 12, 10, 7, 9]));
