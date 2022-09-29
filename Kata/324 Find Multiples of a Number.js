// Find Multiples of a Number

/*
In this simple exercise, you will build a program that takes a value, integer , 
and returns a list of its multiples up to another value, limit . 
If limit is a multiple of integer, it should be included as well. 
There will only ever be positive integers passed into the function, not consisting of 0. 
The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
*/

function findMultiples(integer, limit) {
  let finArr = [];
  let curNum = integer;
  while (curNum <= limit) {
    finArr.push(curNum);
    curNum += integer;
  }
  return finArr;
}

console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
console.log(findMultiples(5, 7)); // [5]
console.log(findMultiples(11, 54)); // [11, 22, 33, 44]





function findMultiples(int, limit){
  let result = []
  
  for (let i = int; i <= limit ; i += int)
    result.push(i)
    
  return result
}



function findMultiples(int,limit){
  return Array(Math.floor(limit / int)).fill(1).map((x,i) => int * (i + 1));
}


function findMultiples(int, limit) {
  return Array.from({length: parseInt(limit/int)}, (_,i)=> (i+1)*int )
}
