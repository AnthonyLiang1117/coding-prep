/*
Write a function called isPalindrome which returns true if the string passed to it is a palidrome (reads the same backwards and forwards). Otherwise it returns false

Restate:
Create a function that accepts
1 input: a string
the string is made up of all lowercase alphabetical letters
1 output: a boolean
returns true if the string reads backwards the same as it reads forwards
return false if the string does not

Examples:
isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false

Approach / Code:
can use the multiple pointer approach for iterative solution
can use helper function recursion approach for recursion solution
use string.slice method to make copy of string with one less char
*/

// interative solution
function isPalindromeIterative(string){
  // create 2 pointers, 1 for the beginning of the string and 1 for the end of the string
  let beginning = 0;
  let end = string.length - 1;

  // a while loop for when the beginning index is < than the end index
  while (beginning <= end){
    // check if the values at both pointers are the same
    // if they are, increment beginning and decrement end
    if (string[beginning] === string[end]){
      beginning++;
      end--;

    } else {
      // if not, return false
      return false

    }
  }
  // if it makes through the loop, return true
  return true;
}

console.log(isPalindromeIterative('tacocat'))

function isPalindromeRecursion(string){
  // create a variable that holds the reversed string
  let reversed = '';
  // create a helper function for the recursion we dont keep resetting the reversed string variable
  function helper(string){
    // base case we want to eventually reach
    if (string.length === 0) return;

    // add the letters to the string
    reversed = string[0] + reversed;

    // recall of helper function within with a different input to eventually reach base case
    helper(string.slice(1));
  }
  // call helper function
  helper(string);

  // compare the reversed string with the input string
  // if ===, return true
  // else, return false
  return string === reversed ? true : false;
}

console.log(isPla)
