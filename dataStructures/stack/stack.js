/*

Implementing a stack using the principles of a singly linked list
Needs to satify the last in first out principle of a stack

push method, takes a value, and adds a element to the beginning of the stack
create a node with the given value
if the stack is currently empty,
assign the first and last properties to be the newly created node
if not,
assign the new node's next property to point at the current first node
assign the first property to be point at the new node
increment the size by 1 since we just added to the stack
return the size

pop method, takes no value, and removes an element from the beginning of the stack
if the stack is empty, return null
create an variable to hold the element we are trying to remove , which is the first element currently since we add from the beginning
if we are about to remove the last element from the stack,
assign the first and last to be the null to represent no more on stack
if not,
create a variable to hold the 2nd to last element which will be come the last element
reassign the first property to be the new last element
reassign the removing node's next to be null
decrement the size of the stack since we are removing a element from it
return the removed node

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

  pop() {
    if (this.size === 0) return null;

    let oldEnd = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    let newEnd = oldEnd.next;
    this.first = newEnd;
    this.size--;
    return oldEnd.value;
  }
}

let stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack);
