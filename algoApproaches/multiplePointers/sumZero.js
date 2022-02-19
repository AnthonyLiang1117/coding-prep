/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does no exist
*/

/*
Restate:
create a function that takes 1 input, an array
The array is sorted from smallest to largest
Find the first pair that sums to 0
the function should return an array that has both the values that sum up to 0
return undefined if pair does not exist

Examples:
sumZero([-3, -2, -1, 0, 1, 2, 3]) => [-3,3]
sumZero([-2, 0, 1, 3]) => undefined
sumZero([1, 2, 3]) => undefined
sumZero([-2, -1, 0, 1, 2, 3]) => [-2, 2]

Approach / Code:
*/

const sumZero = (array) => {
  // create 2 variables that hold the index of the 1st element in the array and last element in the array
  let beginningIndex = 0;
  let endIndex = array.length - 1;

  while (beginningIndex < endIndex) {
    let beginningElement = array[beginningIndex] ;
    let endElement = array[endIndex];
    let sum = beginningElement + endElement

    // sum those numbers up and see what the sum is:
    if (sum === 0) {
    // if the sum is equal to what we looking for => return TRUE
      return [beginningElement, endElement]

    } else if (sum > 0) {
    // if the sum is higher than what we are looking for => subtract 1 from the value of the index that represents the end of the array
      endIndex --

    } else if (sum < 0){
  // if the sum is lower than what we are looking for => add 1 the value of the index that represents the beginning of the array
      beginningIndex++

    }
  }
  // check again if sum is equal to what we are looking for, if not, keep going until beginningIndex becomes greater than endIndex and if never return true, reutrn undefined
  return undefined

}

console.log(sumZero([-2, -1, 0, 1, 2, 3]))

/*
Time Complexity: O(n)
- since we only have 1 loop, which equal O(n), and just arithmetric operations which are constant , which simplify down to O(1),

Space Complexity: O(1)
- since we are only storing variables that are primitive data types
*/
