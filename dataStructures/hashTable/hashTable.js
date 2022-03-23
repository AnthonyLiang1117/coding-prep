/*

Implementing a hash table class
- similar to what an object in Javascript is
- accepts a size value
- has a keyMap property that initializes as an array of the given size
- best to use an array size of a prime number since its better for avoiding collusion

*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
}
