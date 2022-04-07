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

  // dijkstra accept 2 vertices and returns the shorest path in an array
  dijkstra(start, end) {
    // initializing a priorty queue
    const PQ = new PriorityQueue();

    // initializing a distance obj that will take in account how much distance interms of weight is the start vertex to any vertex in the graph
    const distance = {};

    // initializing a previous obj that will take in account at each vertex, which vertex is it traveling from
    const previous = {};

    // create a for in loop with the keys of the adjacency list
    for (let vertex in this.adjacencyList) {
      // if the current key we are at is the starting vertex
      if (vertex === start) {
        // create a key in the distance obj with a value of 0
        distance[vertex] = 0;

        // enqueue onto the PQ with the vertex and the weight aka 0
        PQ.enqueue(vertex, 0);

        // if not,
      } else {
        // create a key in the in the distance obj with a value of infinity
        distance[vertex] = Infinity;

        // enqueue onto the PQ with the vertex and the weight aka infinity
        PQ.enqueue(vertex, Infinity);
      }

      // create a key in the previous obj for every iteration with a value of null
      previous[vertex] = null;
    }

    console.log(distance);
    console.log(previous);
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
WG.addVertex('D');
WG.addVertex('E');
WG.addVertex('F');

WG.addEdge('A', 'B', 4);
WG.addEdge('A', 'C', 2);
WG.addEdge('B', 'E', 3);
WG.addEdge('C', 'D', 2);
WG.addEdge('D', 'E', 3);
WG.addEdge('D', 'F', 1);
WG.addEdge('E', 'F', 1);

console.log(WG.dijkstra('A', 'E'));
