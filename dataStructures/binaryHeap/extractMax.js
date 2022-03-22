/*

Implement an extractMax method for the max binary heap class
This function does not accept anything and returns the top element of max binary heap while reordering the values so it remains sufficent

Approach:
Create a max binary heap class
Create a extractMax method that accepts no values
Grab the value of the current max
Pop off the value of last element in the values property
Check to see if we ended up popping off the last element from the heap
if not,
- reassign the max in the binary heap to be the last element we popped off
- run the sinkDown method
return the old max

sinkDown() method
it does not accept a value and wants to reorder the max binary heap so that it is still following the principles of binary heap
where every parent node is larger than their child
Grab the index of the newly reassigned max
grab the value of of the newly reassigned max
create a variable to represent the length of binary heap in array form
initialize a left child and right child variables to eventually hold the values of those
initialize a swap variable to represent if we swapped or not that round
create a variable
start a while loop that runs true and we will eventually break out of it
- grab the indexes of both children based off of the index
- check to see if left child's index is within bounds of our binary heap
  - if so,
  - assign the left child to have the value at left child's index
  - check to see if the left child's value is greater than the max's value
    - if so,
    - assign the swap to be left child
- check to see if the right child's index is within bounds of our binary heap
  - if so,
  - assign the right child to have the value at the right child's index
  - check to see if we have not swapped yet and if the right child's value is greater than the max's value
    OR if the we have swapped and the if the right child's value is greater than the max's value
    - if so,
      - assign the swap to be right child
- check to see if we ended up swapping
  - if we did not swap this iteration, we can break out of it
- swap the values of element and swap
- reassign the max's index to be swap index
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

    let currentIndex = this.values[this.values.length - 1];
    let current = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (current <= parent) break;

      swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[index];
    const length = this.values.length;

    let leftChild;
    let rightChild;
    let swap = null;

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];

        if (leftChild > element) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightChild = this.values[rightIndex];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChild;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
