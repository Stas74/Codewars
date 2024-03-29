// Linked Lists - Push & BuildOneTwoThree

/*
Linked Lists - Push & BuildOneTwoThree

Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. 
Try to use the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
The push function accepts head and data parameters, where head is either a node object or null/None/nil. 
Your push implementation should be able to create a new linked list/node when head is null/None/nil.

The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // if (!head) {
  //   return new Node(data);
  // } else {
  //   let currentHead = new Node(data);
  //   currentHead.next = head;
  //   return currentHead;
  // }
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





var push = (head, data) => new Node(data, head);

var build = (...args) => args.reduce(push, null);

var buildOneTwoThree = build.bind(null, 3, 2, 1);

var Node = (data, next = null) => ( {data, next} );




function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce( (head, data) => push(head, data), null );
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}




function push(head, data) {
  var node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1);
}

function Node(data) {
  this.data = data;
  this.next = null;
}




class Node {
  constructor(data, next = null) {
    Object.assign(this, {data, next});
  }
}

const push = (head, data) =>
  new Node(data, head);

const buildOneTwoThree = () =>
  [3, 2, 1].reduce(push, null);



