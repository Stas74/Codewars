// Get key - value pairs as arrays

/*
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): 
This kata only tests for data that uses object literal notation (simple objects). 
For extra style, can you get your method to check for objects that extend their prototype?
*/

function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 })); //[['a', 'b', 'c'], [1, 2, 3]]
console.log(keysAndValues({ 1: "a", 2: "b", 3: "c" })); //[['1', '2', '3'], ['a', 'b', 'c']]



function keysAndValues(data){
    var arr = [];
    arr.push(Object.keys(data));
    arr.push(Object.keys(data).map(function(x){return data[x]}))
    return arr
}



function keysAndValues(data){
  return [Object.keys(data), Object.keys(data).map(function (key) { return data[key]; })];
}



function keysAndValues(data){
  return [[...Object.keys(data)],[...Object.values(data)]]
}
