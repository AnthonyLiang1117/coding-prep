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

addEdge()
- accepts 2 vertices and adds an edge between the 2 vertices
- checks to see if there is a key with the first vertex
- if so,
- push the second vertex onto the array at the key of first vertex
- checks to see if there is a key with the 2nd vertex
- if som
- push the 1st vertex onto the array at the key of second vertex

removeEdge()
- accepts 2 vertices and remove the edge between them.
- it shoudl modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer tain the edge
- check to see if there is a key with the first vertex
- if so,
- use the array.filter method to remove the 2nd vertex out of the array
- check to see if there is a key with the 2nd vertex
- if som
- use the array.filter method to remove the 1st vertex out of the array
  - creates a new array so we need to reassign the key to have the new value

removeVertex()
- accepts a vertex and removes it from graph
- sicne we need to remove both the connections that the vertex has and the vertex itself
- we can remove the connections by looping through the adjacency list object
- use removeEdge function on the current key we are at with the given vertex
- we can then delete the key from thE adjacency list object to remove the vertex

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

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    for (let otherVertex in this.adjacencyList) {
      if (otherVertex !== vertex) {
        this.removeEdge(otherVertex, vertex);
      }
    }

    delete this.adjacencyList[vertex];
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

graph.removeVertex('C');
graph.removeVertex('B');

console.log(graph);
