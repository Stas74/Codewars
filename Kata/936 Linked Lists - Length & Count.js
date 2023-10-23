// Linked Lists - Length & Count

/*
Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3

Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4

I've decided to bundle these two functions within the same Kata since they are both very similar.

The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let pointer = head;
  let totalLength = 0;
  while(pointer) {
    totalLength += 1;
    pointer = pointer.next;
  }
  return totalLength;
}

function count(head, data) {
  let pointer = head;
  let countInteger = 0;
  while(pointer) {
    if(pointer.data === data) {
      countInteger += 1;
    }
    pointer = pointer.next;
  }
  return countInteger;
}




function Node(data) {
  this.data = data
  this.next = null
}

function length(head) {
  return head ? 1 + length(head.next) : 0
}

function count(head, data) {
  if (!head) return 0
  return (head.data === data ? 1 : 0) + count(head.next, data)
}



function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let length = 0;
  let current = head;
  
  while ( current != null ) {
    current = current.next
    length++;
  }
  
  return length;
}

function count(head, data) {
  let current = head;
  let count = 0;
  
  while ( current != null ) {
    if ( current.data === data )
      count++;
      
    current = current.next;
  }
  
  return count;
}





function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let rst=0;
  while (head){
    rst++;
    head=head.next;
  }
  return rst;
}

function count(head, data) {
  let rst=0;
  while (head){
    if (head.data == data) rst++
    head=head.next;
  }
  return rst;
}




class Node {
  constructor(data) {
    Object.assign(this, {data, next: null});
  }
}

const length = head =>
  head ? 1 + length(head.next) : 0;

const count = (head, data) =>
  head ? (head.data === data) + count(head.next, data) : 0;




function Node(data) {
  this.data = data;
  this.next = null;
}

const iterate = (head, fn) => { head && (fn(head.data), iterate(head.next, fn)) }

function length(head) {
  var l = 0;
  iterate(head, () => l++);
  return l;
}

function count(head, data) {
  var c = 0;
  iterate(head, (v) => v === data && c++);
  return c;
}




function Node(data) {
  this.data = data;
  this.next = null;
}
const length = (head) => head == null ? 0 : head.next == null ? 1 : 1 + length(head.next);
const count = (head, data) => head == null ? 0 : head.next == null ? +(head.data == data) : +(head.data == data) + count(head.next, data);
