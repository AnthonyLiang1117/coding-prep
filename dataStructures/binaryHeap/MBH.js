/*

Implement a max binary heap class
- can use an array to represent our max binary heap
- there is a parent node and child nodes
- in a Max binary heap, the children nodes are ALWAYS smaller than the parent node
- based on the parent's index n in the values array, the children can be found:
  - left child's index: 2n + 1;
  - right child's index: 2n + 2;
- based on the child's index n in the values array, the parent can be found:
  - parent's index: Math.floor((n - 1) / 2)


insert ()
- takes a value and adds it onto the MBH
- pushes the given value onto the values property
- checks to see if the MBH is empty
- if not,
- calls the bubbleUp method to make sure the value added in is in the right place in our MBH

bubbleUp()
- meant to move the new value added to the list into the right spot of the MBH
- the children of the parent node must be less than the parent
- grab the index of the element we just pushed in
- grab the index of the parent to the newly added element
- while the value at the currentIndex is greater than the value at the parentIndex
- swap the values
- reassign the currentIndex to be parentIndex
- reassign the parentIndex to keep the loop going
- once we are out of the loop, return the MBH

*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    if (this.values.length > 1) this.bubbleUp();

    return this;
  }

  bubbleUp() {
    const swap = (array, idx1, idx2) => {
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    };

    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (this.values[currentIndex] > this.values[parentIndex]) {
      swap(this.values, currentIndex, parentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
}

const MBH = new MaxBinaryHeap();

console.log(MBH.insert(1));
console.log(MBH.insert(2));
console.log(MBH.insert(3));
console.log(MBH.insert(4));
console.log(MBH.insert(5));
console.log(MBH.insert(6));
