/*
Create a factorial function

Restate:
Create a function that takes an input: 1 number
and returns an output: mulitple each number from the input to 1

Example:
factorial(4) => 24
factorial(5) => 120
factorial(1) => 1

Approach / Code:
*/

function factorial(num){
  // condtional for edge case for 0
  if (num === 0) return 1

  // establish base case
  // since we want it to reach 1
  if (num === 1) return 1;

  // recall function with a differnt input
  // we need the input to change and reach the base case
  // since we want a value at the end, we need to return it
  return num * factorial(num - 1)
}

console.log(factorial(7))
