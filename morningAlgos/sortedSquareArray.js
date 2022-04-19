/*

Understand:
Function that
accepts 1 input: an array
the array is made of us integers that are sorted in ascending order
returns 1 output: an array
a new array of the same length with squares of the original integer also sorted
could use an array.map method to transform all the numbers and returns an array at the end

Edge cases:
what if the numbers are negative?

Diagram:
input [1 , 2, 3]
return [1 ^ 2, 2 ^ 2, 3 ^ 2]
since they are already sorted, we do not need to sort them again later since they will already be in a sorted matter

input [-2, 1]
return [4, 1]

Psuedo Code:
use array.map with every input squared to get a new array
since there is a chance that the input array has negative numbers,
negative numbers squared are larger positive numbers
we will need to sort it one more time before we return the array

*/

/*
function sortedSquaredArray(array) {
  let unsorted = array.map(number => number * number)

	return unsorted.sort((a,b) => a - b)
}


Time Complexity: O(n log n)
- since any sorting algorithm at best will sort everything with a n log n Time Complexity

Space Complexity: O(n)
- since we will be creating a new array with n being the length of the input array

*/

/*
Optimized Solution:
[-5, -3, -1, 2, 4, 6]
  L                R

since negative numbers squared, will produce a higher number
the further it gets from the middle, the higher the number will be squared
will have 2 pointers that look at the left most index and right most index
compare those 2 values squared as then they will be both positive values
this will allow us to control where to input the squared numbers into the results of squared numbers array
without needing to sort the array after
by going from right to left, we will be able to put the higher numbers in first so that it is in ascending order

*/

function sortedSquaredArray(array) {
  const results = new Array(array.length);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const leftValue = array[leftPointer] ** 2;
    const rightValue = array[rightPointer] ** 2;

    if (leftValue > rightValue) {
      results[i] = leftValue;
      leftPointer++;
    } else {
      results[i] = rightValue;
      rightPointer--;
    }
  }

  return results;
}

/*
Time Complexity: O(n) linear time
- since we are doing everything inside just 1 for loop, we are able to keep the run time O(n) as n grows

Space Complexity: O(n) linear space
- we will be creating an array of the same amount of elements as our input array
*/

console.log(sortedSquaredArray([-5, -3, -1, 2, 4, 6]));
