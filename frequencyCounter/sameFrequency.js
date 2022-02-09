/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

/*
Restate:
create a function that takes 2 INPUTS: 1 integer, 1 integer
both integers are postive
OUTPUT: returns true if both input have the same number of digits and same number of times each digit comes up
if not, return false

Example:
sameFrequency(182, 281) => true
sameFrequency(34, 14) => false
sameFrequency(3589578, 5879385) => true
sameFrequency(22,222) => false

Approach / Code:
use for of loop for arrays!!
use for in loops for objects!!
*/

function sameFrequency(int1, int2) {
  // change inputs into strings
  int1 = int1.toString()
  int2 = int2.toString()

  // if the lengths of both string version of int1 and in2 are not the same, return false
  if (int1.length !== int2.length) return false

  // create 2 maps that hold the different digits that occur and how often they occur
  let map1 = {};
  let map2 = {};

  // loop over each input into the 2 individual maps
  for (let digit of int1){
    map1[digit] = (map1[digit] || 0) + 1;
  }

  for (let digit of int2){
    map2[digit] = (map2[digit] || 0) + 1;
  }

  // then loop over 1 map and see if both maps have the same key and the same value in the key
  for (let key in map1){
    if (!(key in map2)){
      return false;
    }

    if (map1[key] !== map2[key]){
      return false;
    }
  }

  // if both pass, at the end, return true
  return true;
}

console.log(sameFrequency(22,222))

/*
Time Complexity: O(n)
- most operations are arithemtic ones so they becomes O(1) and can be ignored for bigger powers
- since mostly, we have 3 for loops O(3n), it simplifies down to O(n)

Space Complexity: O(n)
- since we have to assign 2 varibles that are reference types, the 2 map objects, it becomes O(2n) which simplfies down to O(n)
*/


