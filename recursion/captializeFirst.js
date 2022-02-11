/*
Write a recursive function called captializeFirst. Given an array of strings, captialize the first letter in each string in the array;

Restate:
Create a function that accepts
1 INPUT: an array
the array is up for strings that are all lowercase and alphabetical
1 OUTPUT: an array
the arary is made up for the same amount of strings but just with the first letter of each element in the array is capital

Example:
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

Approach / Code:
can do the helper function recursion for recursion approach
*/

function capitalizeFirst(array){
  // create a variable that holds the new array that holds the newly changed elements
  let capitalArray = [];
  // create a helper function that does the recursion so we dont reset the variable
  function helper(array){
    // base case to eventually break out of the recursion
    if (array.length === 0) return;

    // push the changed element onto the array we created
    let captializeElement = array[0][0].toUpperCase() + array[0].slice(1);

    capitalArray.push(captializeElement);

    // recall helper function within with a different input to eventually reach base case
    helper(array.slice(1));
  }
  // invoke the helper function
  helper(array);

  // return the variable after function is called
  return capitalArray;
}

console.log(capitalizeFirst(['car','taco','banana']))
