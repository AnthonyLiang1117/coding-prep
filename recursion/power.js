/*
Write a function called power which accepts a base and exponent. The function should return the power of the base to the exponent. This function should return the power of the base to the exponenet. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents

Restate:
create a function that accepts 2 inputs: 2 positive numbers
first number is base of the equation
2nd number is the exponent of the equation
output: return the value of the first input raised to the second input

Example:
power(2,0) => 1
power(2,2) => 2 ** 2 => 4
power(2,4) => 2 ** 4 => 16

Approach / Code:
iteratively we could just do base ** exponent
recursively we will do function down below
*/

function power(base, exp) {
  // conditional for when exp is 0 edge case
  if (exp === 0) return 1;

  // base case that we need to work up to
  if (exp === 1) return base;

  // recall of function but with different input that eventually reaches our base case
  return base * power(base, exp - 1)
}

console.log(power(2,0))
