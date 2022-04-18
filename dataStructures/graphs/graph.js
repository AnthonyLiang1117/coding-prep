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

depthFirstSearch()
- depth first priorizites visiting childing of a node before we visit siblings / deepen the traversal before widing it
- this function should return an array of nodes visited using DFS. You can do this iteratively (using a stack) or recrusively
- accepts a vertex for where to start the DFS
- will be doing this iteratively with a stack (last in first out)
- create stack variable to keep track of which vertices we still need to process with the given vertex in it
- create a visited obj variable to keep track of the vertices we have already visited with a key value pair with given vertex
- create an array to store all the vertices to return later
- have a while loop that runs while there is something in our stack
- pop off the value from the stack
- if the value has not been marked as visited yet
- mark it as visited in our visited obj
- push the value onto our return array
- push all of the vertices that have a connection with the current vertex we are looking at onto the stack
- return the results array

breadthFirstSearch()
- priorizitze visiting all the neighbors at a given depth before moving downwards
- accepts a startingVertex
- create a return array to hold all the vertices from the graph
- create a visited obj variable to keep track of the vertices we have visited already
- create a queue (FIFO) to keep track of which vertices we still need to process and add the startingVertex into it
- mark the startingvertex as visited
- have a loop that runs while there something in the queue
- remove the first item from the queue and push it onto the return array
- loop through the value at the currentVertex key in adjacency list
- if any of the vertices are not visited yet
- mark them as visited
- push them onto the queue

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

  DFS(startingVertex) {
    const vertices = [];
    const visited = {};
    const stack = [startingVertex];

    while (stack.length) {
      const currentVertex = stack.pop();

      if (!visited[currentVertex]) {
        visited[currentVertex] = true;

        vertices.push(currentVertex);

        this.adjacencyList[currentVertex].forEach((vertex) => {
          if (!visited[vertex]) stack.push(vertex);
        });
      }
    }

    return vertices;
  }

  BFS(startingVertex) {
    const vertices = [];
    const visited = {};
    const queue = [startingVertex];

    visited[startingVertex] = true;

    while (queue.length) {
      const currentVertex = queue.shift();

      vertices.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((vertex) => {
        if (!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      });
    }

    return vertices;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.BFS('A'));
