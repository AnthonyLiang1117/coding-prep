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

const WG = new WeightedGraph();
WG.addVertex('A');
WG.addVertex('B');
WG.addVertex('C');
WG.addEdge('A', 'B', 9);
WG.addEdge('A', 'C', 5);
WG.addEdge('B', 'C', 7);

console.log(WG.adjacencyList);
