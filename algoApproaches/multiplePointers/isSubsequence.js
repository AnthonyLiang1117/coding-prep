/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the second string, without their order changing.
*/

/*
Restate:
create a function that takes 2 inputs: 2 strings
1st string is smaller string that contains letters
2nd string is larger string that we want to see if the 1st strings letters are in the 2nd string
order matters so we need the letters to come up in the 2nd string in the order they are in the 1st
does not need to be next to each other, just needs to happen in order
all letters are lowercase

Example:
isSubsequence('hello', 'hello world'); => true
isSubsequence('sing', 'string'); => true
isSubsequence('abc', 'abracadabra') => true
isSubsequence('abc', 'acb') => false

Approach / Code:
can use mulitple pointer approach
loop through 2nd string and at each letter, check to see if it matches the first letter of the 1st string
if it does, move the index of the 1st string over and check next letters of 2nd string
if the index of the 1st string === to its length, return true
if it doesnt get there, return false
*/

function isSubsequence(string1, string2){
  // create pointer for string 1 to see which index it is at
  let string1Index = 0

  // loop over string 2 and check:
  for (let i = 0; i < string2.length; i++){

    // if the letters equal to the letter at the current index of string1,
    if (string1[string1Index] === string2[i]){
    // move index up by 1 to change the letter and keep the loop going
      string1Index++
    }

    // if the index of the 1st string === to its length, return true
    if (string1Index === string1.length) return true

  }
  // if it goes through loop, return false
  return false
}

console.log(isSubsequence('hello', 'hello world'))

/*
Time Complexity: O(n)
- since we mainly have 1 loop going through the 2nd string input so that is O(n)
- rest are just operations and returns

Space Complexity: O(1)
- since we are only assigning a variable that is primitive type that is constant space O(1)
*/
