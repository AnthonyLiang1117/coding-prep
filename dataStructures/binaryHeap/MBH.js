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

*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
}
