// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it 
// with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return +String(n).split('').sort().reverse().join('')
}

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(111)); // 111
console.log(descendingOrder(15)); // 51




function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}


function descendingOrder(n){
  return +(n+'').split('').sort().reverse().join('')
}
