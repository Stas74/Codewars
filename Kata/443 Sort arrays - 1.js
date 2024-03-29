// Sort arrays - 1

/*
Just a simple sorting usage. 
Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/

sortme = function( names ){
  return names.sort()
}

console.log(sortme(['one', 'two', 'three' ])); // ["one", "three", "two"]




sortme = function( names ){
  return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
}
