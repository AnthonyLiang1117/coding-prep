/*

Implement graph class
- a DS that is a connection of nodes (vertices) and connections (edges)
- uses an adjacency List (hash table)
  - which is an object
  - thats track of the vertices as keys of the obj and an array as the value
  - in the array, we will have other vertices in them to establish that edge between 2 vertices


addVertex()
- accepts the name of the vertex and adds it to our graph
- checks to see if there is already a vertex in the graph with the given name
- if not,
- initialize the given name as a key in the adjacency list with a value of an array to store the edges later


*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
}
