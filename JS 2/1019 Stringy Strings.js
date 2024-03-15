// Stringy Strings

/*
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
  return new Array(size).fill("10").join("").slice(0, size);
}

console.log(stringy(4)); // '1010'
console.log(stringy(6)); // '101010'
console.log(stringy(12)); // '101010101010'



const stringy = x => ''.padStart(x,'10');



const stringy = size => "10".repeat(size).slice(0,size);



const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');



const stringy = size =>
  ``.padStart(size, `10`);



function stringy(size) {
  return new Array(size).join('10').substr(0,size)   
}



function stringy(size) {
  return ('1'.repeat(size)).replace(/11/g, '10');
}



