/*
Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum.

Restate:
create a function that takes
2 INPUTS: an array and a number
the array is made up of all distinct integers
the number is the target we want to get
1 OUTPUT: an array
the array is made up of other arrays that store all combinations from the input array that adds up to target sum

Edge cases:
Is the array sorted? Array is not sorted but you can sort it yourself
is there negative numbers?
can you only use the numbers once in the combos?

Examples:
threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)   //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
threeSum([5, 6 , 1, -9 , 7, 3 , 2], 35)    //should return []
threeSum([1, 15, -5, 12 , -3, 6 , 2], 10)  //should return [[ -3, 1, 12 ]]

Approach / Code:
can use pointers method
will need to check for when the pointers are at the same
*/

function threeSum(array, target) {
  // sort the array
  array = array.sort((a, b) => a - b);

  // create a variable that will be assigned the array that holds your combos of values
  let combos = [];

  // create a for loop that will run through the entire array
  for (let i = 0; i < array.length - 1; i++) {
    // create 2 pointers that will start at the beginning and at the end
    let beginning = i + 1;
    let end = array.length - 1;

    // create a while loop that will check that the beginning pointer is still less than the end pointer
    while (beginning < end) {
      // create new target by subtracting the current value at the index we are at in the for loop from the target
      let sum = array[i] + array[beginning] + array[end];

      // if the sum  equal to the target
      if (sum === target) {
        // push the array of values of the beginning pointer, end pointer and current index
        combos.push([array[beginning], array[end], array[i]]);

        // also increment and decrement the pointers so we can keep checking to see if theres other combos
        beginning++;
        end--;

        // if the sum is less than the target
      } else if (sum < target) {
        // increment the beginner pointer by 1
        beginning++;

        // if the sum is more than the target
      } else {
        // decrement the end pointer by 1
        end--;
      }
    }
  }

  // once we are out of the loop, return the array
  return combos;
}

console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

/*
Time Complexity: O(n^2)
- since we are using a nested loop that uses the same input that was given, it is quadratic time;

Space Complexity: O(n)
- since we created a variable that holds a reference data type like an array, it is linear space;
*/
