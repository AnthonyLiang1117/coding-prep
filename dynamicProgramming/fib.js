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

// using memoizaiton, a top down approach, has 2 parameters, the number and a memo variable, can have the base cases in the memo so we can eliminate it in the code itself
const fibMemo = (number, memo = { 1: 1, 2: 1 }) => {
  // if the number we are passing into the recursive call is already in the obj, just return that value that we stored in the memo
  if (memo[number] !== undefined) return memo[number];

  // calling the function within itself with a different input so its not a constant cycle
  let result = fibMemo(number - 1, memo) + fibMemo(number - 2, memo);

  memo[number] = result;

  return result;
};

// using tabulation, a bottom up approach, has 1 parameter, the number
const fibTab = (number) => {
  // base case to break out of recursion
  if (number <= 2) return 1;

  // create the table we are using to store the data
  let table = [undefined, 1, 1];

  // have a for loop that starts right after the base cases and runs until the given input
  for (let i = 3; i <= number; i++) {
    // store the calcuated value at each iteration in the table
    table[i] = fibTab(i - 1) + fibTab(i - 2);
  }
  // return the value at the index at the given number
  return table[number];
};

console.log(fibTab(6));
