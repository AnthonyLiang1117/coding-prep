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
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
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
}

let MBH = new MaxBinaryHeap();
console.log(MBH.insert(55));
