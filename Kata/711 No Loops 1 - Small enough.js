// No Loops 1 - Small enough?

/*
*** No Loops Allowed ***

You will be given an array (a) and a limit value (limit). 
You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.
*/

function smallEnough(a, limit){
  return a.every(el => el <= limit);
}

console.log(smallEnough([66, 101], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); // true


const smallEnough = (a, limit) => Math.max(...a) <= limit


function smallEnough(a, limit){
  a.sort((c, d) => d - c)
  return a[0] <= limit
}


const smallEnough = (a, limit) => a.map( num => num > limit ).reduce((a, b) => a + b , 0) != 0 ? false : true;


smallEnough=([a,...b], c) => b.length ? c >= a && smallEnough(b,c) : c >= a
