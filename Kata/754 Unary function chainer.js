// Unary function chainer

/*
Your task is to write a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))
*/

function chained(functions) {
  // return function() {}; dummy string
  return function(b) {
    return functions.reduce(function(b, f) { return f(b) }, b)
  };
  // return function (val){
  //   var finalValue = functions.reduce(function(prevVal, currFunc){
  //     return currFunc(prevVal);
  //   }, val);
  //   return finalValue;
  // }
}

function f1(x) { return x * 2 }
function f2(x) { return x + 2 }
function f3(x) { return Math.pow(x, 2) }

function f4(x) { return x.split("").concat().reverse().join("").split(" ") }
function f5(xs) { return xs.concat().reverse() }
function f6(xs) { return xs.join("_") }

console.log(chained([f1, f2, f3], 0)); //  4
console.log(chained([f1, f2, f3], 2)); //  36
console.log(chained([f4, f5, f6], "lorem ipsum")); //  "merol_muspi"



function chained(functions) {
  return input => functions.reduce((res, func) => func(res), input);
}


function chained(functions) {
  return function(x) {
    for (var f of functions) {
      x = f(x);
    }
    return x;
  }
}


const chained = functions => (arg) => functions.reduce((x, y) => y(x), arg)
