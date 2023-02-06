// Vampire Numbers

/*
Vampire Numbers
Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product
Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.
*/

var vampire_test = function (a, b) {
  return a < 0 && b < 0 ? false : 
  (String(Math.abs(a)) + String(Math.abs(b))).split("").sort().join("") === String(Math.abs(a * b)).split("").sort().join("")
};

console.log(vampire_test(21, 6)); // true
console.log(vampire_test(204, 615)); // true
console.log(vampire_test(30,-51)); // true



function vampire_test(a, b){
  return sortStr(a + '' + b) == sortStr(a * b + '');
}

function sortStr(v){ return v.split('').sort().join('') }



var vampire_test = function(a, b){
    return (''+a+b).split('').sort().join() == (a*b+'').split('').sort().join();
}



function vampire_test(a, b) {
  var x = String(a) + String(b)
  var y = String(a * b)
  
  x = x.split("").sort().join("")
  y = y.split("").sort().join("")
  
  return x === y
}



const vampire_test = (a, b) =>
  [...`` + a + b].sort().join(``) === [...`${a * b}`].sort().join(``);
