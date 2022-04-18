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

addEdege()
- accepts 2 vertices and adds an edge between the 2 vertices
- checks to see if there is a key with the first vertex
- if so,
- push the second vertex onto the array at the key of first vertex
- checks to see if there is a key with the 2nd vertex
- if som
- push the 1st vertex onto the array at the key of second vertex

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

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }
}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log(graph);
