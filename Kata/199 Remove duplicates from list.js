// Remove duplicates from list

/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1])); // [1]
console.log(distinct([1, 1, 1, 2])); // [1,2]



function distinct(a) {
  return Array.from(new Set(a));
}


const distinct = a => a.filter((item, index) => a.indexOf(item) === index);
