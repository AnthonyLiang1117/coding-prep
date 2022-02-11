/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

Restate:
create a function that takes
1 input: a number
the number represents the number we start with
1 output: a number
returns a total of adding up all the numbers from the number passed to the function to 0

Examples:
recursiveRange(6) => 21
recursiveRange(10) => 55

Approach / Code:
*/

const recursiveRange = num => {
  // a variable that holds the total of the numbers
  let total = 0;

  // create the helper function that will do the recursion
  function helper(num){
    // base case that we want to eventually reach
    if (num === 0) return 0;

    // the action of adding the sum with the current number
    total += num;

    // recall of the function with a different input so that we reach the base case
    helper(num - 1);

  }
  // need to call helper function at the end for function to work
  helper(num);

  // return the variable
  return total;
}
