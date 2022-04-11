/*
Question:
Write a fucntion called constructNote, which accepts 2 strings, a message and some letters. The function should return true if the message can be built with the letters you are given, or it should return false
Assume that there are only lowercase letters and no space or special characters in both the message and the letters

Restate:
create a function with
2 inputs: 2 strings
1st is a message made out of letters
2nd is a bunch of letters
returns 1 output: a boolean
Return true if the message can be built out of the letters given
Return false if cannot

all lowercase and no space or special characters

Edge Cases:
are the letters unique?
can the letters be used mulitple times or does the letters in the 2nd string have duplicates?
what happens if the strings are empty? should we sitll return false?

Examples:
constructNote('aa', 'abc') => false
constructNote('abc', 'dcba') => true
constructNote('aabbcc', 'bcabcaddff') => true

Approach:
Basically, we are looking to use the letters parameter to see if we can make out the letters needed in the message parameter
we can make 2 maps that each old the frequency of the letters in message and letter
loop througn messageMap to see if the key value pairs in message equal to letters, if they dont, return false
if we finish the loop, we can eventually return true

*/

const constructNote = (message, letters) => {
  // create a map for message
  const messageMap = {};

  // create a map for letters
  const lettersMap = {};

  // loop through message string to create keys and values inside message map
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    // if there is not a key with the unique letter as we iterate,
    if (!messageMap[char]) {
      // create a key with a value of 1
      messageMap[char] = 1;

      // if there is already a key,
    } else {
      // increment it by 1
      messageMap[char]++;
    }
  }

  // loop through letters tring to create keys and values inside letters map
  for (let i = 0; i < letters.length; i++) {
    let char = letters[i];
    // if there is not a key with the unqiue letter as we iterate,
    if (!lettersMap[char]) {
      // create a key with a value of 1
      lettersMap[char] = 1;

      // if there is already a key,
    } else {
      // increment it by 1
      lettersMap[char]++;
    }
  }

  // loop through the message map
  for (let letter in messageMap) {
    // compare the value at each key in message map with letters map
    // if they are not equal,
    if (messageMap[letter] !== lettersMap[letter]) {
      // we return false
      return false;
    }
  }

  // if we make it through loop, return true
  return true;
};

/*
Time Complexity: O(m + n)
- since we have 2 individual loops that iterate through 2 different inputs, the time complexity will be based on how the 2 inputs grow
- Inside our loops, we are doing arithimitics like adding, assigning and accessing items through bracket notation and objs which are O(1) constant time

Space Complexity: O(n)
- since we have 2 indiviudal reference data types like objects, O(2n) => O(n)
- all the other variables are primitive data types which are O(1)

*/

console.log(constructNote('aa', 'abc'));
