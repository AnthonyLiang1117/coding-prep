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

set method
takes a key and a value and wants to store the value at the index that is provided by putting the key through the hash function
- get the index that is returned by putting the key into the hash table
- check to see if there already a value at that index
- if not,
  - assign the value at that index to be an array
- push the key value as an array onto the array

get method
takes a key and returns the value of that corresponding key if its found
- get the index that is returned by passing the key value
- check to see if there even is a value at that index in the array
- if so,
  - we want to loop through the array at that index to see if there is match for the key part in the elements stored in that array
  - if we find a match, we want to return the value part of the element
- if not,
  - return undefined

keys method
returns an array of the keys in the hash table
- create a variable to hold the keys of our table
- loop through the keyMap property
- check to see if there is a value at the index we are at in the iteration
- if so,
    - we want to loop again through the array at that index
    - check to see if the key at this iteration is already included in our array of keys
    - if not,
      - push the value of the key onto the array
- return the array of keys

values method
returns an array of the values in the hash table
- create a variable to hold the values in the table
- loop through the keyMap property
- check to see if there is a value at the index of our current iteration
- if so,
  - loop through the array at that index
  - check to see if we already have that value in our array of values
  - if not,
    - push the value onto the array of values
- return the array of values

*/

class HashTable {
  constructor(size = 3) {
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

  set(key, value) {
    const index = this.hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        let storedKey = this.keyMap[index][i][0];

        if (storedKey === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let keysArray = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArray;
  }

  values() {
    let valuesArray = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArray;
  }
}

let hashTable = new HashTable();
hashTable.set('hello', 'world');
hashTable.set('bye', 'goodnight');
hashTable.set('monday', '1');
hashTable.set('wednesday', '3');
console.log(hashTable.values());
