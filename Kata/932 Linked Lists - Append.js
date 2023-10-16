// Linked Lists - Append

/*
Write an Append() function which appends one linked list to another. 
The head of the resulting list should be returned.

var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. 
If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

The push() and buildOneTwoThree() (build_one_two_three() in PHP and ruby) functions need not be redefined. 
The Node class is also predefined for you in PHP.
*/

/* PHP Only */
// class Node {
//   public $data, $next;
//   public function __construct($data, $next = NULL) {
//     $this->data = $data;
//     $this->next = $next;
//   }
// }

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  // Your code goes here.
  // Remember to return the head of the list.
  if (!listA) {
    return listB;
  }
  listA.next = append(listA.next, listB);
  return listA;
}

// --------------------------


function append(a,b) {
  if(!a)return b;
  a.next=append(a.next,b);
  return a;
}



function append(listA, listB) {
  if (!listA) return listB;
  if (!listB) return listA;
  var node = listA;
  while (node.next !== null) node = node.next;
  node.next = listB;
  return listA;
}




function Node(data, nxt = null) {
  this.data = data, this.next = nxt;
}

function append(listA, listB) {
  if(!listA) return listB;
  if(!listB) return listA;
  return new Node(listA.data, append(listA.next, listB));
}




class Node {
  constructor(data) {
    Object.assign(this, {data, next: null});
  }
}

const append = (listA, listB) =>
  !listA ? listB : (listA.next = append(listA.next, listB), listA);




const Node = (data, next = null) => ({ data, next });
const append = (l1, l2) => l1 ? new Node(l1.data, append(l1.next, l2)) : l2;




function Node(data) {
  this.data = data
  this.next = null
}

function append(listA, listB) {
  if (listA) {
    let node = listA
    while (node.next) node = node.next
    node.next = listB
    return listA
  } else {
    return listB
  }
}
