/*
https://github.com/kylecombs/curry/tree/main

Restate:
create function called curry that takes 2 inputs: a function
return a curry version of the function that is passed in
curry is the process of using a nth amount of inputs implemented as nth single argument functions

nth amount inputs = (...args) => [...args]

Examples:
const add = (x, y) => x + y

const add = x => y => x + y
const addOne = add(1)
addOne(2) // 3

const addFive = add(5)
addFive(10) // 15

function add (x) {
  return function () {
    return x + y
  }
}

Approach / Code:
*/

function curry(funcArg) {
  // will need to use recursion to move through the array of nth arguments
  // will need to eventually return the value of the function passed into curry

  return function funcArg(...arg) {
    // base case that we will eventually reach and return
    if (arg.length === 1) return funcArg(arg[0]);

    // recall function but with a different input in order to reach base case
    return funcArg(arg[0]) + funcArg(arg.slice(1));
  };
}
