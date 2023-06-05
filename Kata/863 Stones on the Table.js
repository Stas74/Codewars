// Stones on the Table

/*
There are some stones on Bob's table in a row, and each of them can be red, green or blue, 
indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table 
so that the stones in each pair of adjacent stones have different colors.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9
*/

function solve(stones) {
  let count = 0;
  for (let i = 1; i < stones.length; i++) {
    if (stones[i] === stones[i - 1]) {
      count++;
    }
  }
  return count;
}

console.log(solve("RRGGBB")); // 3
console.log(solve("RGBRGB")); // 0
console.log(solve("BGRBBGGBRRR")); // 4



// I love RegExp
const solve = stones => stones.length - stones.replace(/(\w)(?=\1)/g, ``).length


const solve = stones =>
  --stones.match(/(.)(?=\1)|$/g).length;



function solve(stones) {
  return stones.split('').reduce((totalRemove, stone, i) => {
    return i >= 1 && (stones[i - 1] === stone) ? ++totalRemove : totalRemove
  }, 0) 
}


function solve(stones) {
  return stones.split('').reduce((res,val,i) => val === stones[i+1] ? ++res : res,0)
}


function solve(stones) {
  return [...stones].reduce((a, b, i) => a + (b === stones[i + 1]), 0)
}


const solve = stones => (stones.match(/(?<=(.))\1+/g)||[]).join('').length;
