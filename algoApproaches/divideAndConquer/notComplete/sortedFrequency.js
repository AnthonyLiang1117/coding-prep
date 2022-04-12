/*
Question:
Given a sorted array and a number, write a fucntion called sortedFrequency that counts the occurences of the number in the array

Restate:
Create a func that
accepts 2 inputs: an array and a number
the array is sorted and has repeated numbers
the number is the number we want to see how many occurances there are
returns 1 output: a number
the amount of occurences of the target number in the array
if the number is not found in the array, return - 1

Examples:
sortedFrequency([1,1,2,2,2,2,3], 2) => 4
sortedFrequency([1,1,2,2,2,2,3], 3) => 1
sortedFrequency([1,1,2,2,2,2,3], 1) => 2
sortedFrequency([1,1,2,2,2,2,3], 4) => -1

Approach:
can use a frequency map approach
where we iterate through the array
create key value pair with the key being the unique numbers
and value being the amount of times it is in the array

*/

function sortedFrequency(array, target) {
  // create a map for the array
  const map = {};

  // loop through the array
  for (let number of array) {
    // if there is not already a key with the current number we are iterating at
    if (!map[number]) {
      // initialize it with a value of 1
      map[number] = 1;

      // else, if there is already a key
    } else {
      // increment by 1
      map[number]++;
    }
  }

  // return either the value with the target being the key or -1 if key is not found
  return map[target] ? map[target] : -1;
}

/*
Time Complexity: O(n)
- since we have a for loop that runs, the loop run time will grow linear to the input growing O(n)
- the assigning and accessing of values from an obj at O(1)

Space Complexity: O(n)
- since we a reference data type variable that is dependant on how big the input is, it is linear space O(n)
*/

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 7));
