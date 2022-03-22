/*

Implement the insert method for the max binary heap class
This function accepts a value and adds the value into the max binary heap. The principles of a MBH should still be in place
The rules are that the every parent node should always be larger than the children

Approach:
Create a Max Binary Heap Class with a values property
Create a insert method that accepts a value
push the value onto the end of the values property
call the bubble up method
- which is meant check the if the value added is in the right place
- does not accept a value
- grabs the index of the element we just added to the values property
- grabs the index of its parent element
- runs a while loop that checks to see the index of the element is greater than 0 since we do not want to keep moving up the array once we get to the top of the heap which is at index 0
  - we want to compare to see if the element is greater than the parent
  - if the element is less than or equal to the parent,
  - we want to break out of the loop
  - if the element is greater than the parent,
  - we want to swap
  - reassign the index of the element to be the index of the parent
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    const swap = (idx1, idx2) => {
      [this.values[idx1], this.values[idx2]] = [
        this.values[idx2],
        this.values[idx1],
      ];
    };

    let currentIndex = this.values.length - 1;
    let current = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (current <= parent) break;

      swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }
}
