/*
Given an string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

Restate:
create a function that takes
1 INPUT: a string
seems to be  case - insensitive
1 OUTPUT: a boolean
returns true if the string is spelled the same backwards and forwards
return false is not

Edge cases:
what happens if string is 1 char?
what happens if there are numbers and symbols? if they match they are fine

Example:
isPalindrome('aweewa') => true;
isPalindrome('a') => ?;
isPalindrome('aa') => true;
isPalindrome('car') => false
isPalindrome('racecar') => true
isPalindrome('RaCecAr') => true
isPalindrome('!? 100 ABCcba 001 ?!') => true

Approach / Code:
*/

function isPalindrome(string) {
  // change the string into lowercase
  string = string.toLowerCase();

  // create 2 pointers, one for the beginning and one for the end
  let beginning = 0;
  let end = string.length - 1;

  // create a loop
  while (beginning <= end) {
    // checks if the values at the pointers are equal
    // if they arent, return false
    if (string[beginning] !== string[end]) {
      return false;
    } else {
      // if they are, increment beginning pointer and decrement end pointer to eventually break out of loop
      beginning++;
      end--;
    }
  }

  // if it makes it through the loop, return true
  return true;
}

console.log(isPalindrome('!? 100 ABCcba 001 ?!'));

/*
Time Complexity: O(n)
- since we have a while loop going that depends on the input size, that is linear time

Space Complexity: O(1)
- since we are only creating variables with primitive data types, its constant space
*/
