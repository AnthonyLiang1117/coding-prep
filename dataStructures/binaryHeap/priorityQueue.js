/*

Implementing a priority queue class
similar to a binary heap but instead of comparing based on values, we are comparing based on priority
will be implementing a min binary heap

Approach:
Will need to implement a Node class
- with value and priority properties

Will need to implement a priority queue class
- with a values property

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
}
