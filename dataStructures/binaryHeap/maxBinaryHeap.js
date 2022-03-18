/*

Implement a Max binary heap class
- must have it so the parent node is always larger than its children
- children do not have an order between them
- must be added to the left first then right
- takes a values property that initalizes as an array

insert() method
takes a value and adds it to the correct spot in the array and returns the array at the end
- push the value onto the array
- use bubble up method on the values property
- return the values at the end

bubbleUp() method
makes sure that the principles of a max binary heap are right
- create a variable for the index of the value that we just added in
- create a variable for the index of the value's parent => Math.floor((currentIndex - 1) / 2)
- create a while loop that runs as long as the value of the parentIndex is less than the value of the currentIndex
  - swap them
  - reassign the parentIndex to be the new parent's index


extractMax() method
takes no values and removes the root from the Max Binary Heap and returns it while fixing the heap
- needs an edge case that checks if we end up removing the last item from the heap
- swaps the root and the last element in the values property of the max binary heap
- pops the last element off of the values property and saves it to return later
- now we have to sink down the new root so that heap is still in order
- have a while loop that runs while the children are larger than the parent
  - checks to see if either values of the children of the parent node are greater than the value of the parent node
    - if they are
      - swap with the larger value
      - reassign the parent index to be the index of the child it swapped with
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [77, 66, 55, 41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let currentValue = this.values[currentIndex];

    const swap = (array, index1, index2) => {
      [array[index1], array[index2]] = [array[index2], array[index1]];
    };

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.values[parentIndex];
      if (currentValue <= parentValue) break;
      swap(this.values, parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    if (this.values.length === 1) {
      let removedValue = this.values.pop();

      return removedValue;
    }
    const swap = (array, idx1, idx2) =>
      ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);

    swap(this.values, 0, this.values.length - 1);

    let removedValue = this.values.pop();

    this.sinkDown();

    return removedValue;
  }

  sinkDown() {
    const swap = (array, idx1, idx2) =>
      ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);

    let parentIndex = 0;
    let parentValue = this.values[parentIndex];

    const length = this.values.length;

    let child1Index = 2 * parentIndex + 1;
    let child2Index = 2 * parentIndex + 2;

    while (child1Index < length || child2Index < length) {
      let child1Value = this.values[child1Index];
      let child2Value = this.values[child2Index];

      if (parentValue < child1Value || parentValue < child2Value) {
        if (child1Value && child2Value) {
          if (child1Value > child2Value) {
            swap(this.values, parentIndex, child1Index);
            parentIndex = child1Index;
          } else if (child1Value < child2Value) {
            swap(this.values, parentIndex, child2Index);
            parentIndex = child2Index;
          }
        } else if (child1Value && !child2Value) {
          swap(this.values, parentIndex, child1Index);
          parentIndex = child1Index;
        } else if (!child1Value && child2Value) {
          swap(this.values, parentIndex, child2Index);
          parentIndex = child2Index;
        }

        child1Index = 2 * parentIndex + 1;
        child2Index = 2 * parentIndex + 2;
      } else {
        break;
      }
    }
  }
}

let MBH = new MaxBinaryHeap();
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());

// [66, 41 , 55 , 12 , 19, 33, 18, 27]
//   0   1   2    3    4   5    6   7
