// Two numbers are positive

/*
Your job is to write a function, which takes three integers a, b, and c as arguments, 
and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
*/

function twoArePositive(a, b, c) {
  return [...arguments].filter((el) => el > 0).length == 2;
}

console.log(twoArePositive(2, 4, -3)); // true
console.log(twoArePositive(-4, 6, 8)); // true
console.log(twoArePositive(-4, 6, 0)); // false
console.log(twoArePositive(4, 6, 10)); // false




function twoArePositive(a, b, c) {
  return (a > 0) + (b > 0) + (c > 0) == 2;
}



function twoArePositive(a, b, c) {
  return [a, b, c].filter(val => val > 0).length === 2
}



function twoArePositive(a, b, c) {
  // Happy Coding
  let num = 0;
  if(a > 0){
    num++
  } if(b > 0){
    num++
  } if(c > 0){
    num++
  }
  return num === 2
}



function twoArePositive(...arr) {
  return arr.filter(e => e>0).length==2;
}



const twoArePositive = (...a) => a.filter(b => b > 0).length === 2;
