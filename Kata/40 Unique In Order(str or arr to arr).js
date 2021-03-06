// Implement the function unique_in_order which takes as argument a sequence and returns a list of items
// without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if ((iterable == [])) {
    return [];
  }
  let arr = [iterable[0]];
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      arr.push(iterable[i]);
    }
  }
  // console.log(arr);
  return arr;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A','B','C','D','A','B']

console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]

// ------------------------------------------------------------


var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}


var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}


const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])
