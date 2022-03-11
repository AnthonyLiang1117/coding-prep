/*

Implementing a stack using the principles of a singly linked list
Needs to satify the last in first out principle of a stack

push method, takes a value, and adds to the beginning of the stack
create a node with the given value
if the stack is currently empty,
assign the first and last properties to be the newly created node
if not,
assign the new node's next property to point at the current first node
assign the first property to be point at the new node
increment the size by 1 since we just added to the stack
return the size


*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }

  pop() {}
}

let stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack);
