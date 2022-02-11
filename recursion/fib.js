/*
Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 ... which starts with 1 and 1 and where every number thereafter is equal to the sum of the previous 2 numbers

Restate:
Create a function that takes
1 input: a number
the number is going to be used to figure out that index of the fibonacci sequence
where it starts with 1 and 1 and every number after is equal to the sum of the previous 2 numbers

Example:
fib(4) => 3 because 1 , 1, 2, 3
fib(10) => 55
fib(28) => 317811
fib(35) => 9227465

Approach / Code:
*/

function fib(num) {

  // base case we want to eventually get to
  if (num <= 2) return 1;

  // the actual fib number
  let fibNum = (fib(num - 1)) + (fib(num - 2))

  // return result
  return fibNum;
}

console.log(fib(10))
