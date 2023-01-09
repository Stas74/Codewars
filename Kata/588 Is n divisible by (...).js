// Is n divisible by (...)

/*
Create a function isDivisible(n,...) that checks 
if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

isDivisible(6,1,3)--> true because 6 is divisible by 1 and 3
isDivisible(12,2)--> true because 12 is divisible by 2
isDivisible(100,5,4,10,25,20)--> true
isDivisible(12,7)--> false because 12 is not divisible by 7
*/

function isDivisible() {
  let first = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (first % arguments[i] != 0) {
      return false;
    }
  }
  return true;
}

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(12)); // true
console.log(isDivisible(8, 3, 4, 2, 5)); // false




function isDivisible(firstN, ...otherN){
  return otherN.every(n => firstN % n === 0);
}



function isDivisible(n) {
  for (var i = 1; i < arguments.length; i++) {
    if (n % arguments[i]) { return false };
  }
  return true;
}



const isDivisible = (n, ...xs) => xs.every(x => n % x == 0);



const isDivisible = (n, ...rest) =>
  rest.every(val => !(n % val));
