/*
Restate:
Create a function that implements mergeSort
where we break up the input array into halves and keep halfing them until we get to indiviudal arrays
after we merge them one array with one array at a time until we get to fully sorted array

Example:
mergeSort([4,2,6,8,19]) => [2,4,6,8,19]
mergeSort([10,25,13,85,93,2]) => [2,10,13,25,85,93]
mergeSort([9,2,1,4,65,32,42]) => [1,2,4,9,32,42,65]

Approach / Code:
Break it down to individual parts
create merge function for merging 2 sorted arrays
*/

function merge(array1, array2) {
  // create a variable that we are going to return for the merged arrays
  let mergedArray = [];

  // create 2 pointers, one for the beginning of array 1 and one ofr the beginng of array 2
  let pointer1 = 0;
  let pointer2 = 0;

  // have a while that goes until pointer1 < array1.length && pointer2 < array2.length
  while (pointer1 < array1.length && pointer2 < array2.length) {
    // check if the value at pointer 1 < value of pointer 2
    let currentElem1 = array1[pointer1];
    let currentElem2 = array2[pointer2];

    if (currentElem1 < currentElem2) {
      // if so, push value at pointer 1 onto return array and increment pointer 1 by 1
      mergedArray.push(currentElem1);
      pointer1++;
    } else if (currentElem2 < currentElem1) {
      // else, push value at pointer 2 onto return array and increment pointer 2 by 1
      mergedArray.push(currentElem2);
      pointer2++;
    }
  }

  // once we finish going through one array, we will push all the remaining values from the other array onto returned array
  while (pointer1 < array1.length) mergedArray.push(array1[pointer1++]);
  while (pointer2 < array2.length) mergedArray.push(array2[pointer2++]);

  // return merged array
  return mergedArray;
}

console.log(merge([100], [1, 2, 3, 4, 5, 6]));

function mergeSort(array) {
  // base case that we want that will eventually help us break out of recursion
  if (array <= 1) return array;

  // break down array into halves and keep breaking them down until we get to the very bottom
  let midpoint = Math.floor(array.length / 2);

  // recalling of function in order to start the recursion but with a different output
  let left = mergeSort(array.slice(0, midpoint));
  let right = mergeSort(array.slice(midpoint));

  // merge back the indivdual arrays using merge function until theres only 1 array and return array
  return merge(left, right);
}

/*
Time Complexity: O(n log n)
- since we have to split up the input in half every time we run the function, this makes it logarithmic time log n
- in every split, we have to make n number of comparsions in order to break it down into individual arrays which makes it linear time
- O(n * log n) => O(n log n)

Space Complexity: O(n)
- since we will be creating n number of individual arrays based on the input size, this makes it linear space O(n)
*/
