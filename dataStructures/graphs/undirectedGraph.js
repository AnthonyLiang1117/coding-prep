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

  // removeVertex method accepts a vertex and removes that vertex and its connections from the graph
  removeVertex(vertex) {
    // loop through the connections array at the vertex's key
    for (let connection of this.adjacencyList[vertex]) {
      // each iteration, we need to call the removeEdge method with the vertex we are removing and the vertex at each iteration to remove the connections
      this.removeEdge(vertex, connection);
    }
    // after the loop, we can delete the key from the graph
    delete this.adjacencyList[vertex];
  }

  // depth first graph traversal accepts a starting vertex and returns the graph in a depth first search approach
  DFGTRecursive(startingVertex) {
    // creates an array variable to hold all the of vertices in a depth first search approach
    let vertices = [];

    // create a obj variable to mark off the vertexes we have visited
    let visited = {};

    // create an adjacency list variable so the this context can be perserved
    const adjacencyList = this.adjacencyList;

    // create a helper function that accepts a vertex
    (function DFT(vertex) {
      // for the base case that we want to eventually reach to break out of recursion, should return if the vertex is empty
      if (!vertex) return;

      // pushes the given vertex onto vertices array
      vertices.push(vertex);

      // makes a key in the visted obj to mark it as true
      visited[vertex] = true;

      // loop through the array at the key value pair of vertex in the adajaceny list
      adjacencyList[vertex].forEach((connection) => {
        // for every element in the loop that is not marked as visited in the visited obj
        if (!visited[connection]) {
          // call the helper function on those vertices
          DFT(connection);
        }
      });
    })(
      // invoke the helper function with the starting vertex
      startingVertex
    );

    // return the vertices array
    return vertices;
  }

  // depth first graph traversal accepts a vertex and returns an array of vertices in the graph in depth first search approach
  DFGTIterative(startingVertex) {
    // create stack variable to keep track of the vertices we need to process
    const stack = [];

    // create a vertices array that will hold all of the vertices
    const vertices = [];

    // create a visited obj that will mark when we have visited an vertex
    const visited = {};

    // push the starting vertex onto the stack
    stack.push(startingVertex);

    // have a while loop that runs while the stack has something in it
    while (stack.length) {
      console.log(stack);
      // pop the next item off of the stack and put it into a variable
      let currentVertex = stack.pop();

      // if the vertex has not been visited before
      if (!visited[currentVertex]) {
        // push the vertex onto the vertices array
        vertices.push(currentVertex);

        // mark the vertex as visited
        visited[currentVertex] = true;

        // push each of the values of the vertex key in the adjacency list if they have not been visited or in the stack already
        this.adjacencyList[currentVertex].forEach((connection) => {
          if (!visited[connection] && !stack.includes(connection)) {
            stack.push(connection);
          }
        });
      }
    }
    // return the vertices array
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

console.log(graph.DFGTIterative('A'));
