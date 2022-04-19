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

function sortedSquaredArray(array) {
  let unsorted = array.map((number) => number * number);

  return unsorted.sort((a, b) => a - b);
}

/*

Time Complexity: O(n log n)
- since any sorting algorithm at best will sort everything with a n log n Time Complexity

Space Complexity: O(n)
- since we will be creating a new array with n being the length of the input array

*/

console.log(sortedSquaredArray([-5, -3, -1, 2, 4, 6]));
