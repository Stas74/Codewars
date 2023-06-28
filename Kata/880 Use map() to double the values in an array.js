// Use map() to double the values in an array

/*
Make the double() function return a new array with each value twice as large 
as the corresponding value in the passed in array. 
Your solution must use the map() function of the built-in javascript Array object. 
If you're not familiar with map(), reading over the documentation may help.

function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}
For example:

var someNumbers = [1,2,10,57];

double(someNumbers); // should return [2,4,20,114]
*/

function double(array) {
  // Use array.map() to return a new array with each value twice
  // as large as the corresponding value in the passed in array.
  return array.map(el => el * 2);
}

console.log(double([1, 2, 3, 4, 5])); // [2,4,6,8,10]
console.log(double([71, -548, 12.3, 31415])); // [142,-1096,24.6,62830]



function double(array) {
  return array.map(function(c){ return c * 2 });
}



function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
    
    var doubler = function(num){
      return num*2;
    }
    
    var final = array.map(doubler)
    return final;
}


 
const double = a => a.map(e => e + e);



