// Fun with lists: length

/*
Implement the method length, which accepts a linked list (head), and returns the length of the list.

For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/

function length(head) {
  let count = 0;
  while (head) {
    head = head.next;
    count++;
  }
  return count;
}

console.log(length(null)); // 0



function length(head) {
	if (head == null) return 0;
	return 1 + length(head.next);
}


function length(head) {  
  var currentNode = head;  
  for (var i=0;currentNode; ++i) {    
    currentNode = currentNode.next
  }  
  return i;
}



function length(head) {
  return !head ? 0 : 1 + length(head.next);
}



const length = $ => !$ ? 0 : length($.next) + 1



function length(head) {
// first test if head exists
// if not return 0
// else return 1 + call function again with next element in list and do the same check
// so each time we have a pointer to a next elemnt we will add 1 and return the sum in the end
  return typeof head === 'undefined' || head === null ? 0 : 1 + length(head.next);
}
