/*

Creating a weighted graph class
- has an adjacency list property to represent a graph with its vertices and edges

addVertex method
- accepts the name of a vertex
- initializes the vertex in the adjacency list as a key with a value of an array to later add the edges it will have with other vertices

addEdge method
- accepts 2 vertices and a weight for the edge
- will establish the connection between 2 vertices by pushing an obj made out of the vertex it has a connection with + the weight of the connection

*/

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

/*

Creating a simple priority queue class
- has a values property that initializes as an array to represent a queue

enqueue method
- accepts 2 parameters, a value and a priority
- pushes an obj made up of the given value and priority arguments onto the values property
- calls the sort method so the values are sorted in least to greatest

dequeue method
- shifts off the first element from the valus property and returns it

sort method
- sorts the values property so its least to greatest

*/

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const WG = new WeightedGraph();
WG.addVertex('A');
WG.addVertex('B');
WG.addVertex('C');
WG.addEdge('A', 'B', 9);
WG.addEdge('A', 'C', 5);
WG.addEdge('B', 'C', 7);

console.log(WG.adjacencyList);
