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

remove()
- in MBH, when we are removing a node, we are normally removing the root node in a binary heap
- we swap the values of the root and the last element in the MBH
- pop off the last item in the values property ( which is now the old root of the MBH)
- check to see if there is still values left in the MBH,
- if so, run sinkDown()
- return the MBH

sinkDown()
- grab the index of the first element now that it is out of place
- create a variable for the value of the first element
- create a length variable to hold the value of the length
- have a while loop that runs true
- find the index of the left and right children
- initialize left and right child variable to later hold the values at left and right index
- create a swap variable to initialize as null to see if we end of swapping this iteration or not
- check if the left index is within bounds of values property
- if so,
- assign the left child variable the value at the left index
- check if the current value is less than the left value
- if so,
- reassign swap to be left index;
- check if the right index is within bounds of values property
- if so,
- assign the right child variable the value at the right index
- check if we did not swap AND the current value is less than the right value OR if we did swap AND the left value is less than right value
- rassign swap to be right index;
- if swap is still null, we break out of the loop since the number is where it should be
- swap the current index with swap index
- reassign current index to be swap

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

  remove() {
    const swap = (array, idx1, idx2) => {
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    };

    swap(this.values, 0, this.values.length - 1);

    const removeNode = this.values.pop();

    if (this.values.length > 0) {
      this.sinkDown();
    }

    console.log('REMOVED NODE', removeNode);
    return this;
  }

  sinkDown() {
    const swap = (array, idx1, idx2) => {
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    };

    let currentIndex = 0;
    const current = this.values[currentIndex];
    const length = this.values.length;

    while (true) {
      const leftIndex = 2 * currentIndex + 1;
      const rightIndex = 2 * currentIndex + 2;

      let left;
      let right;
      let swapIndex = null;

      if (leftIndex < length) {
        left = this.values[leftIndex];

        if (current < left) {
          swapIndex = leftIndex;
        }
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];

        if ((!swapIndex && current < right) || (swapIndex && left < right)) {
          swapIndex = rightIndex;
        }
      }

      if (!swapIndex) break;

      swap(this.values, currentIndex, swapIndex);

      currentIndex = swapIndex;
    }
  }
}

const MBH = new MaxBinaryHeap();

MBH.insert(1);
MBH.insert(2);
MBH.insert(3);
MBH.insert(4);
MBH.insert(5);
MBH.insert(6);

console.log(MBH.remove());
console.log(MBH.remove());
console.log(MBH.remove());
console.log(MBH.remove());
console.log(MBH.remove());
console.log(MBH.remove());
