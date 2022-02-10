/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all

Restate:
create a function that has
1 input: an array
the array is made up of postivie numbers
1 output: a number
the number is the product of all the numbers in the array

Example:
productOfArray[1,2,3] => 6
productOfArray[1,2,3,10] => 60

Approach / Code:
we can use the helper method recursion approach
when dealing with arrays, use methods that make copies of arrays!! do not mutate
*/

function productOfArray(array){
  // create a variable that holds the product for the numbers in the array
  let result = 1;

  // define a helper function that does the recursion for us
  function helper(array){
    // base case we want to reach
    if (array.length === 0) return;

    // thing we want to do to result
    result *= array[0]

    // recalling the function with a different input that helps us reach the base case
    helper(array.slice(1))
  }
  // call the helper function
  helper(array);

  // return the product
  return result
}

console.log(productOfArray([1,2,3, 10]))
