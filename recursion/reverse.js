/*
Write a function called reverse which accepts a string and returns a new string

Restate:
Create a function that accepts
1 INPUT: a string
the string contains only alphabetical letters
1 OUTPUT: a string
the returned string should be the reverse of the input string

Examples:
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'

Approach / Code:
can use the string.slice(beginningIndex, endIndex)
can also use helper function recursion approach to keep track of the letters we used so far
*/

function reverse(string){
  // create a variable to hold the reversed string
  let reversed = "";

  // create helper function to do the recursion so that the variable is not reassigned as empty
  function helper(string){
    // base case that we want to eventually hit to break out of recursion
    if (string.length === 0){
      return;
    }

    // perform the adding of letters to the reversed variable
    reversed = string[0] + reversed;

    // recalling of helper function with different input so we can reach base case
    helper(string.slice(1));

  }
  // call helper function to invoke it
  helper(string);

  // return the reversed string at the end
  return reversed;
}

console.log(reverse('rithmschool'))
