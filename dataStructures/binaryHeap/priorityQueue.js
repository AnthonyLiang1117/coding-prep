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
}
