/*

Solving the fibonacci problem without dynamic programming vs dynamic programming

To get the nth fibonacci number, fib(n) = fib(n - 1) + fib(n - 2)
fib(2) is 1
fib(1) is 1

*/

const fibNoDP = (number) => {
  // base cases to eventually break out of recursion
  if (number === 1 || number === 2) return 1;

  // calling the function within itself with a different input so its not a constant cycle
  return fibNoDP(number - 1) + fibNoDP(number - 2);
};

// has 2 parameters, the number and a memo variable, can have the base cases in the memo so we can eliminate it in the code itself
const fibDP = (number, memo = { 1: 1, 2: 1 }) => {
  // if the number we are passing into the recursive call is already in the obj, just return that value that we stored in the memo
  if (memo[number] !== undefined) return memo[number];

  // calling the function within itself with a different input so its not a constant cycle
  let result = fibDP(number - 1, memo) + fibDP(number - 2, memo);

  memo[number] = result;

  return result;
};

console.log(fibDP(5));
