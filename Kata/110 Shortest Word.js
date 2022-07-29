// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  s = s.split(" ");
  let finLength = s[0].length;
  for (let el of s) {
    if (el.length < finLength) {
      finLength = el.length;
    }
  }
  return finLength
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2


const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;


function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


