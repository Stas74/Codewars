// Return a sorted list of objects

/*

You'll be passed an array of objects (list) - 
you must sort them in descending order based on the value of the specified property (sortBy).

Example
When sorted by "a", this:

[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
should return:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
The values will always be numbers, and the properties will always exist.

*/

function sortList(sortBy, list) {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}

// map(el => console.log(el[sortBy]));
console.log(
  sortList("a", [
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 },
  ])
);

//  [ { a: 4, b: 12 }, { a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 } ]




function sortList (sortBy, list) {
  return list.sort(function(a, b){
    return a[sortBy] < b[sortBy];  
  })
}



function sortList (sortBy, list) {  
  return list.sort( function(a, b) {return b[sortBy.toString()] - a[sortBy.toString()] } );
}


sortList = (s, l) => l.sort((a, b) => b[s] - a[s]);



