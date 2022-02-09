/*
Implement a function called, areThereDuplicates, which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.
*/

/*
Restate:
create a function that takes an unknown amount of variables / inputs
returns true if there is a element in those inputs that repeat
return false if there is no repeat

Example:
areThereDuplicates(1,2,3) => false
areThereDuplicates(1,2,2) => true
areThereDuplicates('a','b', 'c', 'a') => true

Approach / Code:
can use (...arg) to represent the variable number of arguments which will be an array
use for of loop for arrays!!!
*/

function areThereDuplicates(...args){
  // create a map that will hold each argument that is passed into function
  let map = {};

  // loop over args and check:
  for (let element of args){
    // 1) if do not already have a key in the map, create one
    if (!map[element]){
      map[element] = 1

    // 2) if they already have a key in the map, return true
    } else {
      return true
    }
  }

  // if we loop over and nothing happens: return false
  return false
}

console.log(areThereDuplicates('a','b', 'c', 'a'))

/*
Time Complexity: O(n)
- since we mostly use 1 for loop, it is O(n) times since the loop will be dependant on the amount of inputs

Space Complexity: O(n)
- since we need to assign a variable to an object that is O(n) for the number of keys that will be created due to number of inputs
*/
