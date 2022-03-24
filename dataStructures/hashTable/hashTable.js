/*

Implementing a hash table class
- similar to what an object in Javascript is
- accepts a size value
- has a keyMap property that initializes as an array of the given size
- best to use an array size of a prime number since its better for avoiding collusion

hash method
means to take a key and switch it into an index so we can add it to our hash table that is represented by an array
- creates a variable to hold the index, which is meant to represent which spot in the array this key is equal to after going through hash
- create a variable to hold a prime number to help with the collusion
- create a for loop that runs for the length of the key or first 100 characters in a string
  - create a variable to hold the letter at each iteration
  - grab the index of the character in the alphabet
  - reassign the total to equal itself * by the prime number + the index of the character % the length of the array to get it within the bounds of the array
- return the index

*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let index = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];

      let value = char.charCodeAt(0) - 96;

      index = (index * PRIME + value) % this.keyMap.length;
    }

    return index;
  }
}
