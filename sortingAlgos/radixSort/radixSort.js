/*
Restate:
create function that implements radix sort

Example:
radixSort([4,2,6,8,19]) => [2,4,6,8,19]
radixSort([10,25,13,85,93,2]) => [2,10,13,25,85,93]
radixSort([9,2,1,4,65,32,42]) => [1,2,4,9,32,42,65]

Approach / Code:
Break it up to differnt parts
create a function that returns the number of digits in a num given a number (digitCount())
create a function that finds the largest amount of digits in a num given an array (maxDigits())
create a function that gets back the digit value at a certain place given a number and place (getDigit())
*/

function digitCount(num) {
  if (num === 0) return 1;
  // get the absolute value of the number
  // figure out to 10 to what power is going to get me to that number to figure out if its ones, tens, hundreds, thousands
  // floor it so it rounds down
  // add up to bring it up
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function maxDigits(array) {
  // get a counter that will represent the largest amount of digits of the numbers we go through
  let maxDigit = 0;

  // make a loop that runs through the given array
  for (let element of array) {
    // re assign counter to have the larger number of digits as we compare it
    maxDigit = Math.max(maxDigit, digitCount(element));
  }
  // return counter
  return maxDigit;
}

function getDigit(num, place) {
  // get the absolute value of number
  // divide based on which position we want to get, ones, tens, hundreds, thousands so 10 raised to the place power
  // round it down to the nearest number
  // then mod it by 10 to find the remainder
  // return it
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function radixSort(array) {
  // find the largest amount of digits in this set of numbers
  let maxDigit = maxDigits(array);

  // do a loop that loops from 0 to the largest number of digits
  for (let i = 0; i < maxDigit; i++) {
    // inside loop
    // create an array of arrays from 0 to 9;
    // let bucket = [[], [], [], [], [], [], [], [], [], []]; // must have better way than to do it like this
    let bucket = Array.from({ length: 10 }, () => []);

    // loop over the array again to use each number
    for (let j = 0; j < array.length; j++) {
      // push each number to one of the arrays in the array based on the digit it gets at the bigger loops current iteration
      let currentNum = array[j];
      let currentPlace = i;
      let currentDigit = getDigit(currentNum, currentPlace);
      bucket[currentDigit].push(currentNum);
    }

    // concat all the arrays together and reassign input array
    array = [].concat(...bucket);
  }
  // return sorted input array
  return array;
}

console.log(radixSort([10, 25, 13, 85, 93, 2]));
