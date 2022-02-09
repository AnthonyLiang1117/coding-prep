/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/

/*
Restate:
Basically the array.indexOf() function
has 2 INPUT: a SORTED array and the value we are looking for
has 1 OUTPUT: the index of that value in the array
if not found, return -1

Example:
search([1,2,3,4,5,6], 4) => 3
search([1,2,3,4,5,6], 6) => 5
search([1,2,3,4,5,6], 11) => -1

Approach / Code:
*/

const search = (array, value) => {
  // make 2 pointers of where the array begins and where the array ends
  let beginningIndex = 0;
  let endIndex = array.length - 1;

  // while the beginning index is smaller than the end index:
  while (beginningIndex < endIndex){
    // find the middle index of the array like the average
    let middleIndex = Math.floor((beginningIndex + endIndex) / 2)

    // check if value of the middle array is the target value
    let currentElement = array[middleIndex]

    // if the current element is less than the value, make the average middle index larger
    if (currentElement < value){
      beginningIndex = middleIndex + 1;

    // if the current element is more than the value, make the average middle index smaller
    } else if (currentElement > value){
      endIndex = middleIndex - 1;

    // if the current element equals to value, return the index of the
    } else {
      return middleIndex;

    }
  }

  // if the value is greater than beginning element:
  return -1;
}

/*
Time Complexity: O(n)
- since we will be only using one while loop, it becomes O(n)

Space Complexity: O(1)
- since we are only assigning variables that are primitive types
*/

