// Evil or Odious

/*
The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, 
function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

good luck :)
*/

function evil(n) {
  return n.toString(2).split('').filter(num => num === '1').length % 2 !== 0 ? "It's Odious!" : "It's Evil!"
}


console.log(evil(1)) // "It's Odious!"
console.log(evil(2)) // "It's Odious!"
console.log(evil(3)) // "It's Evil!"




function evil(n) {
    return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
}



evil = n => ["It's Evil!", "It's Odious!"][(n.toString(2).split("1").length-1) & 1];
