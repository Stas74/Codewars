// Bits Battle

/*

The odd and even numbers are fighting against each other!

You are given a list of positive integers. 
The odd numbers from the list will fight using their 1 bits from their binary representation, 
while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, 
hence not fight for either side.

You should return:

odds win if number of 1s from odd numbers is larger than 0s from even numbers
evens win if number of 1s from odd numbers is smaller than 0s from even numbers
tie if equal, including if list is empty
Please note that any prefix that might appear in the binary representation, e.g. 0b, 
should not be counted towards the battle.

Example:

For an input list of [5, 3, 14]:

odds: 5 and 3 => 101 and 11 => four 1s
evens: 14 => 1110 => one 0

Result: odds win the battle with 4-1

*/


function bitsBattle(numbers) {
  numbers = numbers.filter(e => e !== 0);
  let odds = numbers.filter(el => el % 2 !== 0).map(el => el.toString(2)).join("").replace(/[0]/g, "");
  let evens = numbers.filter(el => el % 2 === 0).map(el => el.toString(2)).join("").replace(/[1]/g, "");
  return odds.length > evens.length ? 'odds win' : odds.length < evens.length ? 'evens win' : "tie";
}


console.log(bitsBattle([5, 3, 14])); // 'odds win'
console.log(bitsBattle([3, 8, 22, 15, 78])); // 'evens win'
console.log(bitsBattle([1, 13, 16])); // 'tie'
console.log(bitsBattle([0])); // 'tie'
console.log(bitsBattle([0, 1, 2])); // 'tie'



const bitsBattle = arr => {
  var score = arr.reduce((a, x) => a + (x&1?+1:-1)*(x && x.toString(2).split(x&1).length-1), 0);
  return score > 0 ? "odds win" : score < 0 ? "evens win" : "tie";
}



const countBits = (num, val) => num.toString('2').split(val).length - 1;

function bitsBattle(numbers) {
  let totals = [ 0, 0 ];  
  for (let num of numbers)
    if (num)
      totals[num % 2] += countBits(num, num % 2);    
  let diff = totals[0] - totals[1];  
  return diff > 0 ? 'evens win'
       : diff < 0 ? 'odds win'
       : 'tie';       
}



function bitsBattle(numbers) {
  const num = numbers.filter(Boolean);
  const odd = num.filter(e => e%2).reduce((a,c) => a+(c.toString(2).match(/1/g)||[]).length,0);
  const even = num.filter(e => e%2==0).reduce((a,c) => a+(c.toString(2).match(/0/g)||[]).length,0);
  return odd>even?'odds win':(even>odd?'evens win':'tie');
}



function bitsBattle(numbers) {
  return ["odds win","tie","evens win"][Math.sign(numbers.reduce( (battle,n) => battle + fight(n), 0 ))+1]
}

const fight = x => x==0 ? 0 : x.toString(2).replace( x%2 ? /0/g : /1/g, '' ).length*(x%2 ? -1:1);



