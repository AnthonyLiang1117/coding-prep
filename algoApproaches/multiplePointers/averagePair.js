/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

/*
Restate:
create a function that takes on 2 INPUTS: 1 array and 1 number
the array is sorted and is made up on integers
the number represents the target that you want when you average 2 numbers together
and returns 1 OUTPUT:
returns true if there is a pair that average together equals the target
return false if no pair in the in the array equals to the target

Examples:
averagePair([1,2,3], 2.5) => true
averagePair([1,3,3,5,6,7,10,12,19], 8) => true
averagePair([-1,0,3,4,5,6], 4.1) => false
averagePair([], 4) => false

Approach / Code:
since it is a sorted array, we can use multiple pointer approach
if we need to sort an array of numbers, we can do array.sort((a,b) => a - b)
*/

function averagePair(array, target){
  // create 2 pointers that represnet the index of the beginning and end of the array
  let beginningIndex = 0;
  let endIndex = array.length - 1;

  // while the beginning index is less than the end index:
  while (beginningIndex <= endIndex){
    // check if those the values at those 2 pointers averaged together equals target
    let average = (array[beginningIndex] + array[endIndex]) / 2;

    // if yes, return true
    if (average === target){
      return true;

    // if average is > than target, subtract 1 from the pointer that represents end of array
    } else if (average > target) {
      endIndex--;

    // if average is < than target, add 1 from the pointer that represents the array
    } else if (average < target) {
      beginningIndex++
    }
  }

  // if we make it through the loop, return false
  return false;
}

console.log(averagePair([1,2,3], 2.5))

/*
Time Complexity: O(n)
- since we mainly have 1 while loop, that translates to O(n)
- rest of the other operations are O(1)

Space Complexity: O(1)
- we only assign variables that have a primitive type so those are constant O(1)
*/
