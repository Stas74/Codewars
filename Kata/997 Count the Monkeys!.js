// Count the Monkeys!

/*
You take your son to the forest to see the monkeys. 
You know that there are a certain number there (n), but your son is too young to just appreciate the full number, 
he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), 
populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/

function monkeyCount(n) {
  return [...Array(n).keys()].map((i) => i + 1 );
}

console.log(monkeyCount(3)); // [1, 2, 3]
console.log(monkeyCount(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=> i + 1)
}



function monkeyCount(n) {
 var monkeys = [];
 for(var i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}



function monkeyCount(n) {
  return Array.from(Array(n), (_,i)=>++i)
}



function monkeyCount(n) {
    return [...Array(n+1).keys()].slice(1);
}




const monkeyCount = n =>
  [...Array(n)].map((_, idx) => ++idx);
