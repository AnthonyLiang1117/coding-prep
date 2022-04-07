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
    // initializing a priorty queue to
    const PQ = new PriorityQueue();

    // initializing a distance obj that will take in account how much distance interms of weight is the start vertex to any vertex in the graph
    const distance = {};

    // initializing a previous obj that will take in account at each vertex, which vertex is it traveling from
    const previous = {};

    // initializing a smallest variable to hold the item that we dequeue off of the PQ
    let smallest;

    // initializing a path variable that will eventually return
    const path = [];

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

    // while there is something in the PQ
    while (PQ.values.length) {
      // we want to dequeue a value off of the PQ and assign it to our smallest variable
      smallest = PQ.dequeue().value;

      // check to see if smallest is equal to the end vertex, if so we are done
      if (smallest === end) {
        console.log('done');
      }
      // otherwise,
      // We want to loop in the adjacency list with smallest being the key
      for (let neighbor in this.adjacencyList[smallest]) {
        // create a neighborNode variable to represent current edge we are iterating through in the adjacencyList[smallest] array
        let neighborNode = this.adjacencyList[smallest][neighbor];

        // create a candidiate variable to hold the calculation of the value of the distance of smallest + the value of nextNode's weight for the edge
        let candidate = distance[smallest] + neighborNode.weight;

        // if the candidate is less than what the distance[neighborNode's name]
        if (candidate < distance[neighborNode.node]) {
          // update the value at distance[neighborNode's name] to equal candidate
          distance[neighborNode.node] = candidate;

          // update the value at previous[neighborNode's name] to equal the current node we looking at aka smallest
          previous[neighborNode.node] = smallest;

          // enqueue in priority queue with new priority
          PQ.enqueue(neighborNode, candidate);
        }
      }
    }
    console.log('DISTANCE!', distance);
    console.log('PREVIOUS!', previous);
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
