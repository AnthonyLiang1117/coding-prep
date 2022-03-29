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
}

const graph = new Graph();
graph.addVertex('HELLO');
console.log(graph.adjacencyList);
