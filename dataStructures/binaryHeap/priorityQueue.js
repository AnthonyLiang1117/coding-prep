/*

Implementing a priority queue class
similar to a binary heap but instead of comparing based on values, we are comparing based on priority
will be implementing a min binary heap

Approach:
Will need to implement a Node class
- with value and priority properties

Will need to implement a priority queue class
- with a values property

Will implement an enqueue method, similar to an insert method of binary heap
- accepts a value and a priority
- creates a node with the given value and priority
- pushes the node onto the end of the priority queue's values property
- invokes the bubble up method

bubbleUp method
- goal is the arrange the values so that every parent's priority is less than their children's priorities
- grab the index of the newly added node
- create a variable to hold the node at that index
- create a while loop that checks for the index being less than 0 since if it ever gets to the 0th index, it means that it is the top node of the binary heap
  so we do not want it to keep trying to replace itself with values outside of the array
  - grab index of the index's parent
  - grab the value at the parent's index
  - compare if the priority of element with the priority of the parent
    - if priority of the element is greater than or equal to the priority of the parent,
    - we want to break out of the loop since it is in the right place
  - swap the values of element and parent
  - reassign the index to be the parent

dequeue method
- grab top node from the priority queue
- get the end node from the priority queue by popping it off
- if there is more than 0 nodes in the priority queue
  - reassign the value at the top node to be the end node
  - invoke the sinkDown method
- return the top node

sinkDown method
- grabs the index of the newly assigned top node
- grabs the value at that index
- creates a variable to represent the length of the priority queue
- initializes the left and right children values variables
- initalizes a swap variable to represent if we swapped or not during the iteration
- creates while loop that runs true and we will eventually break out of it using break
  - grabs the index of the left and right children based off of the index of the newly assigned top node
  - checks to see if the left child index is within bounds of the priority queue
    - if so,
    - assign left child to have the value at the left child index
    - checks if the left child's priority is less than the priorty of the parent
      - if so,
      - assign swap to be left child index
  - checks to see if the right child index is within bounds of the priority queue
    - if so,
    - assign right child to have the value at the right child index
    - check to see if we have not swapped yet and if the right child's priority is less than the priority parent's
      OR if we have swapped and if the right child's priority is less than the left child's priority
      - if so,
      - assign swap to be right child index
  - if we did not swap at all during this iteration, we can break out of the loop since the parent is at the right spot
  - swap the values of index and swap
  - reassign index to be swap

*/

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);

    this.values.push(newNode);

    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;

      this.values[index] = parent;
      this.values[parent] = element;
      index = parentIndex;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let index = 0;
    const node = this.values[index];
    const length = this.values.length;

    while (true) {
      let leftChild;
      let rightChild;
      let swap = null;

      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];

        if (leftChild.priority < node.priority) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightChild = this.values[rightIndex];

        if (
          (swap === null && rightChild.priority < node.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
