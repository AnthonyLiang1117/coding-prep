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

/*
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


Time Complexity: O(n)
- since we have a for loop that runs, the loop run time will grow linear to the input growing O(n)
- the assigning and accessing of values from an obj at O(1)

Space Complexity: O(n)
- since we a reference data type variable that is dependant on how big the input is, it is linear space O(n)
*/

/*
Optimized solution:
utitlize the divide and conquer approach
where we find the index for the first time the number shows up
- when the number to the left of the number we are looking for is not the same number
where we find the index for the last time the number shows up
- when the number to the right of the number are looking for is not the same number
after we find those 2 indexes, we will need to subtract them and add 1 since arrays start at index of 0

*/

function sortedFrequency(array, target) {
  // create the first occurance of the target number helper function
  const firstOccurance = (
    number,
    firstLeft = 0,
    firstRight = array.length - 1
  ) => {
    // have a while loop that runs checking when the left is still less than or equal to the right pointer
    while (firstLeft <= firstRight) {
      // calculate the midpoint between the 2 pointers
      let midpoint = Math.floor((firstLeft + firstRight) / 2);

      // check to see if the value of the midpoint equals the target number and if the number before the midpoint is different from the target || undefined
      if (
        array[midpoint] === number &&
        (array[midpoint - 1] !== number || !array[midpoint - 1])
      ) {
        // if so, assign the first number's index to be the midpoint and break out of the while loop
        return midpoint;

        // if the number is equal to target but is not the first occurance of the number
      } else if (array[midpoint] === number) {
        // move it left since we want this number to return to us the first number the pops up
        firstRight = midpoint - 1;

        // else if the value of the midpoint is less than the value of the target,
      } else if (array[midpoint] < number) {
        // reassign the first number's left pointer to be the midpoint + 1;
        firstLeft = midpoint + 1;

        // else if the value of the midpoint is greater than the value of the target,
      } else if (array[midpoint] > number) {
        // reassign the first number's right pointer to be the midpoint - 1;
        firstRight = midpoint - 1;
      }
    }
  };

  // create a last occurance of the target number helper function
  const lastOccurance = (number, left = 0, right = array.length - 1) => {
    // while loop that checks if the left pointer is still less than or equal to the right pointer
    while (left <= right) {
      // calculate the midpoint of between the left and right numbers
      let mid = Math.floor((left + right) / 2);

      // if the value at the midpoint is equal to the number and the number to the right of it does not equal the target or is undefined
      if (array[mid] === number && (array[mid + 1] !== target || !array[mid])) {
        // return the midpoint
        return mid;

        // if the value at the midpoint equals the target but is not the last occurance of the target
      } else if (array[mid] === number) {
        // reassign the left pointer to be midpoint + 1;
        left = mid + 1;

        // if the value at the midpoint is less than the value of the target
      } else if (array[mid] < number) {
        // reassign the left pointer to be midpoint + 1;
        left = mid + 1;

        // if the value at the midpoint is greater than the value of the target
      } else if (array[mid] > number) {
        // reassign the right pointer to be midpoint - 1;
        right = mid - 1;
      }
    }
  };

  // create variable to hold first number's index
  let firstNumIndex = firstOccurance(target);

  // create a variable to hold last number's index
  let lastNumIndex = lastOccurance(target);

  // the # of occurance will be the amount of space inbetween the last and first occurance + 1 since arrays start at 0
  return firstNumIndex >= 0 && lastNumIndex >= 0
    ? lastNumIndex - firstNumIndex + 1
    : -1;
}

/*
Time Complexity: O(log n)
- we have 2 loops that will divide the input by half every iteration which means that its logarithmic time complexity O(log n)
- assigning variables and accesing values in an array through bracket notation are all constant time O(1)

Space Complexity: O(1)
- all variables we are creating are primitive data types like numbers so constant space O(1)

*/

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 5));
