// Is every value in the array an array?

/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

const arrCheck = (value) => value.every(Array.isArray);


console.log(arrCheck([])); // true
console.log(arrCheck([["string"]])); // true
console.log(arrCheck([[], {}])); // false
console.log(arrCheck([[1], [2], [3]])); // true



function arrCheck(value){
  let count = 0;
  for(let i = 0; i < value.length; i++){
  if(Array.isArray(value[i]) == true) {count++}  
}
  return (count === value.length);
}



const arrCheck = value => Array.isArray(value) && value.every(Array.isArray);



var arrCheck = function(array) {
  var def = true;
  for(var i = 0; i < array.length; i++) {
    def = array[i] instanceof Array ? def : false;
  }
  
  return def;
};



const arrCheck = a => a.every(x=>x.pop)
