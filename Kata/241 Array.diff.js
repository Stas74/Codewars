// Array.diff

/*
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  if (a.length === 0) {
    return [];
  }
  if (b.length === 0) {
    return a;
  }
  let finArr = [];
  a.forEach(function included(element) {
    if (!b.includes(element)) {
      finArr.push(element);
    }
  });

  return finArr;
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [])); // [1,2,2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]




function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}



function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}
