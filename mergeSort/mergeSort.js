/*
Restate:
Create a function that implements mergeSort

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

console.log(merge([2, 3, 4, 5], [1, 6, 8, 10]));
