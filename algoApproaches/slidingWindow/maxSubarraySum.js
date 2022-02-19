/*
Write a function called maxSubarraySum which accepts an array of integers and an number called n. The function should calculate the maximum sum of n consecutive elements in the array
*/

/*
Restate:
create a function that takes 2 INPUTS: an array of ints and a number
OUTPUT: return the maximum sum of the number consecutive elements in an array

Examples:
maxSubarraySum([1,2,5,2,8,1,5], 2) => 10
maxSubarraySum([1,2,5,2,8,1,5], 4) => 17
maxSubarraySum([4,2,1,6], 1) => 6
maxSubarraySum([4,2,1,6,2], 4) => 13
maxSubarraySum([], 4) => null

Approach/ Code:
use sliding window approach
*/

function maxSubarraySum(array, number) {
  // if the array length is smaller than the number inputed, return null
  if (array.length < number) return null;

  // make 2 variable to keep track of the current sum and the maximum sum so that it will be able to compare each sum
  let maxSum = 0;
  let currentSum = 0;

  // at the beginning, we sum together the initial clump
  for (let i = 0; i < number; i++){
   maxSum += array[i]
  }

  currentSum = maxSum

  // 2nd loop, we can start the loop at where the number is providing the index and
  for (let i = number; i < array.length; i++){
    // subtract the element that is right before the clump and add the element right after the clump
    // this creates the shifting window!
    currentSum = currentSum - array[i - number] + array[i]

    // if current num is > max num, replace max num
    if (currentSum > maxSum) maxSum = currentSum
  }
  // return max num
  return maxSum
}

console.log(maxSubarraySum([], 4))

/*
Time Complexity: O(n)
- since we have 2 individual loops, O(2n) becomes O(n)

Space Complexity: 0(1)
- since we have all variables that are assign to primitive datatypes
*/
