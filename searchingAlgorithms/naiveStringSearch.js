/*
Restate:
create function that takes 2 inputs
a big string and a sub string
return a count of how many times the sub string appears in the bigger string

Examples:
naiveStringSearch('omgomgomg', 'omg') => 3;
naiveStringSearch('yessiromg', 'omg') => 1;
naiveStringSearch('yes', 'omg') => 0;

Approach / Code:
*/

function naiveStringSearch(bigString, subString) {
  // create a counter that holds how many times sub string is in big string
  let count = 0;

  // loop over big string
  for (let i = 0; i < bigString.length; i++) {
    // in a nested loop, loop over smaller string
    for (let j = 0; j < subString.length; j++) {
      if (bigString[i + j] !== subString[j]) {
        // if the letters dont match, break out of loop
        break;
      }
      // if the loop completes, increment counter
      if (j === subString.length - 1) count++;
    }
  }
  // return counter
  return count;
}

console.log(naiveStringSearch('yes', 'omg'));

/*
Time Complexity: O(n^2)
- since we have a nested loop, it is the input mulitpled by its input for quadratic time

Space Complexity: O(1)
- since we only created variables that have primitive types
*/
