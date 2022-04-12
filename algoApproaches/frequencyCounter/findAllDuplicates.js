/*
Question:
Given the array of positive integers, some elements appear twice and other appear once. Find all the elements that appear twice in this array.
Note that you can return the elemnts in any order

Restate:
create a function that
accepts 1 input: an array
an unsorted array of positive numbers that some are duplicate
returns 1 output: an array
an array of the numbers that show up MORE than once

Edge cases:
what happens if there are no duplicates? return empty array
what happens if there are numbers that appear more than twice?

Examples:
findAllDuplicates([4,3,2,7,8,2,3,1]) => [2,3]
findAllDuplicates([4,3,2,1, 0]) => []
findAllDuplicates([4,3,2,1,0,1,2,3]) => [2,3,1]

Approach:
Can use frequency map to keep track of the # of occurances of each number
loop through array to create key value pairs
loop through map and push the keys with values equal to 2 onto a return array

*/

function findAllDuplicates(array) {
  // create an array that we will return at the end
  let result = [];

  // create a map that will keep track of the occurances of the number in the array
  let map = {};

  // loop through array
  for (let number of array) {
    // if there is not already a key with the uniquer number
    if (!map[number]) {
      // initialize with a value of 1
      map[number] = 1;

      // else if there is already key
    } else {
      // increment it by 1
      map[number]++;
    }
  }

  // loop through the map
  for (let key in map) {
    // everytime the value of a key is 2
    if (map[key] === 2) {
      // we push that key onto the array
      result.push(key);
    }
  }

  // return the array at the end
  return result;
}

/*
Time Complexity: O(n)
- since we have 2 indiviudal for loops that run based on the input, as the input grows, the time will grow in a linear way O(n)
- assigning, addition, pushing and accessing values using bracket notation are all constant time O(1)

Space Complexity: O(n)
- since we have 2 reference type variables like an array and a map, these will grow based on how big our input is in a linear way O(n)
- other variables are all primitive data types like numbers which are constant space O(1)

*/

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
