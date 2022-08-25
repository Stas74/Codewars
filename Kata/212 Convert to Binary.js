// Convert to Binary

/*
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)   should return 1 
to_binary(5)  should return 101 
to_binary(11)  should return 1011

*/

function toBinary(n){
  return +n.toString(2);
}

console.log(toBinary(1))  // 1
console.log(toBinary(2))  // 10
console.log(toBinary(11))  // 1011



toBinary = (n) => parseInt(n.toString(2));


const toBinary = n => Number(n.toString(2)) ;
