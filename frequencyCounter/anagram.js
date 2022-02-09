/*
Given 2 strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

/*
  Restate:
  Create a function that has 2 inputs, both strings, to see if both words use the same letters in both strings
  return TRUE if they are an anagram of each other
  return FALSE if not

  Examples:
  validAnagram('', '') // true
  validAnagram('iceman', 'cinema') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('awesome', 'awesom') // false

  Approach:
  Has to be same number of letters
  same length of both strings
  uses the same letter the same amount of times
*/

function validAnagram(string1, string2) {
  // checks if strings are the same length, if not, return false O(1)
  if (string1.length !== string2.length) {
    return false;
  }

  // create maps for both string 1 and string 2 in order to keep track of each letter that we loop over and how many of each letter occurs
  let map1 = {};
  let map2 = {};

  for (let char of string1) {
    map1[char] = (map1[char] || 0) + 1;
  }

  for (let char of string2) {
    map2[char] = (map2[char] || 0) + 1;
  }

  // loop over one object to check:
  for (let key in map1) {
    //      1) if the current key we are on in map 1 is also in map 2
    if (!(key in map2)) {
      return false;
    }

    //      2) if the value of map1[key] === map2[key] to see if the occurance of letters are the same
    if (map1[key] !== map2[key]) {
      return false;
    }
  }

  // return true if all of these are false
  return true;
}

console.log(validAnagram('aaz', 'azz'));

/*

Time complexity: O(n)
- because most of our actions are arithmetic, like assigning and adding, so those equivalate constant O(1)
- the other actions are 3 individual loops so O(3n) becomes O(n)

Space complexity: O(n)
- creating a variable that is a reference type is O(n)
- we created 2 new variables that are objects which would equal to O(2n) becomes O(n)

*/
