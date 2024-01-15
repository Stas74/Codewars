// Linked Lists - Get Nth Node

/*
Implement a GetNth() function that takes a linked list and an integer index and returns the node stored 
at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, 
the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2
The index should be in the range [0..length-1]. If it is not, or if the list is empty, 
GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, 
Exception in Java).
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (!node) throw new Error("Invalid node at " + index);
  return index === 0 ? node : getNth(node.next, index - 1);
}

// Functions to build 1 2 3 list to test getNth function
function push(head, data) {
  let currentHead = new Node(data);
  if (head) {
    currentHead.next = head;
  }
  return currentHead;
}

function buildOneTwoThree() {
  let head = null;
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);
  return head;
}

let list123 = buildOneTwoThree();

console.log(getNth(list123, 1)); // 2
console.log(getNth(list123, 2)); // 3
console.log(getNth(list123, 100)); // "Invalid index value should throw error."




function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  // Your code goes here.
  if (index < 0) {
    throw new Exception("index below zero");
  } else if (index % 1 != 0) {
    throw new Exception("index not integer enough")
  } else if (!node) {
    throw new Exception("index later than end of list");
  } else if (index == 0) {
    return node;
  } else {
    return getNth(node.next, index - 1);
  }
}





class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

const getNth = (node, i) => {
  if (!node) throw 'Invalid node';
  while (i--) {
    const next = node.next
    if (next) node = next;
    else throw 'Invalid index value'; 
  }
  return node;
}





function Node(data) {
  [ this.data, this.next ] = [ data, null ];
}

function getNth(node, index = 0){
  if ( node && !index ) return node;
  return getNth(node.next, index - 1)
} 





function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (!node) throw true;
  return index === 0 ? node : getNth(node.next, index - 1);
}







class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const getNth = (node, index) =>
  !node ? (() => {throw new Error()})() : index ? getNth(node.next, --index) : node;







function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (node != null)
    return index == 0 ? node : getNth(node.next, index - 1);
  else
    throw "invalid argument";  
}
