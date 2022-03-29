/*

Implementing a undirected graph class and storing it using an adjacency list

Graph class
- a graph is a collection of nodes that have connections between the nodes in no particular order
- has an adjacency list property that initializes as an object to later store the key value pairs
- keys will be the vertices
- values will be the connections it has from that vertex

*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // addVertex method which accepts a name of the vertex and adds it to the graph as a key in the adjacency list
  addVertex(name) {
    // checks to see if there is already a key with the same name in the graph
    // if not,

    if (!this.adjacencyList.hasOwnProperty(name)) {
      // assign the adjacencyList property a key based off the given name to represent a vertex
      // with a value of an array to store the connection pairs it will have

      this.adjacencyList[name] = [];
    }
  }

  // addEdge method which accepts 2 vertices and adds the connection into each of the arrays at the 2 keys
  addEdge(vertex1, vertex2) {
    // pushes the name of vertex 2 onto the array list at the key that represents vertex 1
    this.adjacencyList[vertex1].push(vertex2);

    // pushes the name of vertex 1 onto the array list at the key that represents vertex 2
    this.adjacencyList[vertex2].push(vertex1);
  }

  // removeEdge method accepts 2 vertices and removes the connection between the 2 vertices
  removeEdge(vertex1, vertex2) {
    // reassign the connections array at vertex1 to include everything but vertex 2 in it
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    // reassign the connections array at vertex2 to include everything but vertex 1 in it
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }
}

const graph = new Graph();
graph.addVertex('New York');
graph.addVertex('Los Angeles');
graph.addVertex('Chicago');
graph.addEdge('New York', 'Los Angeles');
console.log(graph);
