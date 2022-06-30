// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  let total = 0;
  for (let item of x) {
    item = Number(item);
    total += item;
  }  
  return total;
}


// function sumMix(x){
//   return x.map(a => +a).reduce((a, b) => a + b);
// }


// function sumMix(x){
//   let result = 0;
//   for (let n of x) {
//     result += parseInt(n);
//   }
//   return result;
// }
