/*

Youre given a Node class that has a name and an array of optional children nodes. When put togehter, nodes form an acyclic tree - like structure.
Implement the depthFirstSearch method on the Node class which takes in an empty array, traverse the tree using the Depth-first search approach
(specifically navigating the tree from lefft to right), stores all of the nodes' names in the input array and returns it.

*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  /*
	Inputs: an array
	- an empty array

	outputs: the same array
	- the same array that was given and we will push all of the vertices'name init
		that is in the graph

	objective: print the graph in a depth first search approach
	- depth first search approach means that we going to process one node and go all
	down before processing all of node's childrens
	- we are going all the way down a branch before we process every one of a node's childrens

	for depth first search, we can use a stack which is last in first out DS
	- which can be presented using an array and using the .push and .pop methods
	- to basically add and remove from back like an array

	Also, we need to keep track of the nodes we visited before so we do not need to
	process them again

	since we are using a node class, to represent where we are starting, it is going to be
	using the this context on the node that starts the graph

  Code:

  DFS iteratively traversed the tree from the right to left
  depthFirstSearch(array) {
    // create a variable to represent where we are at in the graph
		let startingVertex = this;

		// create a stack to keep track of the nodes we still need to process
		const stack = [startingVertex];

		// create a visited var to keep track of the nodes we have already processed
		const visited = new Set();

		// loop while the stack has items in it
		while(stack.length){
      // grab an item from the stack
			const currentVertex = stack.pop();

			// if the item has not been visited yet
			if(!visited.has(currentVertex)){
        // we want to mark it as visited
				visited.add(currentVertex);

				// add it to the array that we will return at teh end
				array.push(currentVertex.name)

				// grab each of its children of the current node we are at
				currentVertex.children.forEach(child => {
          // push them onto the stack if they has not been processed before
					if(!visited.has(child)){
            stack.push(child)
					}
				})
			}
		}
		// return the array at the end
		return array;
  }
}
*/

  // DFS recursive navigates the tree from left to right
  depthFirstSearch(array) {
    // initialize visited var to keep track of what vertices we have processed
    const visited = new Set();

    // write a helper function that accepts the vertex
    function traverse(vertex) {
      // we want mark the vertex as visited
      visited.add(vertex);

      // push the name of the vertex onto the array
      array.push(vertex.name);

      // grab each of its children
      vertex.children.forEach((child) => {
        // if the child hasnt been processed yet
        if (!visited.has(child)) {
          // call the hlper function on the child
          traverse(child);
        }
      });
    }
    // invoke the function with the starting vertex
    traverse(this);

    // return the array
    return array;
  }
}

/*
Time Complexity: O(n + m) with n being the number of vertices in the graph and m being the number of edges in the graph
Space Complexity: O(n) with since the set we created has nth number of vertices as values in it
*/
