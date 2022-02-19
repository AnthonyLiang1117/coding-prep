/*
You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

Restate:
Create a function that does what indexOf does
takes 2 INPUTS: 2 strings
one string is the big string
one string is the sub string that you are trying to find the index of
returns 1 OUTPUT: a number
returns the index of where the string starts
returns -1 if its not found in the big string

Example:
stringSearch('or', 'hello world'); // should return 7
stringSearch('hello world', 'or'); // should return -1
stringSearch('howdy', 'hello world'); // should return -1
stringSearch('oox', 'ooboxoooxo'); // should return 6

Approach / Code:
Sliding window approach
*/

function stringSearch(subString, bigString) {
  // create a loop that goes through the letters of the big string
  for (let i = 0; i < bigString.length; i++) {
    // check for when the current letter of big string matches the first letter of the substring
    let currentChar = bigString[i];

    if (currentChar === subString[0]) {
      // if it does
      // create a nested loop that checks the next couple letters in both strings
      for (let j = 1; j < subString.length; j++) {
        // if not, break out of loop;
        if (subString[j] !== bigString[i + j]) {
          break;
        }
        // if the loop makes it to the last letter of the substring and it doesnt immediately break, means the substring was found and return the index of the outer loop
        if (j === subString.length - 1) {
          return i;
        }
      }
    }
  }
  // if it makes it through the big loop, return -1 for not matching
  return -1;
}

console.log(stringSearch('or', 'hello world'));

/*
Time Complexity: O(n*m)
- since we have a nested loop that depends on the input size of 2 different inputs, its O(n*m)

Space Complexity: O(1)
- since we are only creating variables that are primitive data types, its constant time
*/
