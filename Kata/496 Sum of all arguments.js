// Sum of all arguments

/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
TIPS:
ruby/python : http://lmgtfy.com/?q=Ruby+splat+operator

JS/Coffeescript : http://lmgtfy.com/?q=Javascript+arguments+variable

C: https://www.geeksforgeeks.org/variadic-functions-in-c/
*/

function sum() {
  return [...arguments].reduce((prev, cur) => prev + cur, 0);
}

console.log(sum(1, 2, 3)); //  6
console.log(sum(12, 1, 1, 1, 1)); //  16



function sum(...xs) {
  return xs.reduce((x, y) => x + y);
}


function sum() { return [].reduce.call(arguments, function(s,v){ return s+v },0 ) }

function sum() {
  return Array.prototype.reduce.call(arguments, function(t, v) { 
    return t + v; 
  }, 0);
}





