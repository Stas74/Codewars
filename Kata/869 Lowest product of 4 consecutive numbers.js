// Lowest product of 4 consecutive numbers

/*
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

function lowestProduct(input) {
  if (input.length < 4) {
    return "Number is too small";
  }
  let finNum = input.slice(0, 4).split("").reduce((prev, cur) => prev * (+cur), 1);
  for (let i = 1; i + 3 < input.length; i++) {
    let product = input.slice(i, i + 4).split("").reduce((prev, cur) => prev * (+cur), 1);
    if (product < finNum) {
      finNum = product;
    }
  }
  return finNum;
}

console.log(lowestProduct("123456789")); // 24
console.log(lowestProduct("234567899")); // 120
console.log(lowestProduct("2345611117899")); // 1
console.log(lowestProduct("333")); // "Number is too small"
console.log(lowestProduct("1234111")); // 4  "Numbers should be consecutives"



function lowestProduct(input) {
  let arr = input.split``.map((x,i,a) => a.length - i < 4 ? Infinity : x * a[i+1] * a[i+2] * a[i+3]);
  return input < 1000 ? "Number is too small" : Math.min(...arr);
}



function compareNumbers(a, b) {
    return a - b;
}

function lowestProduct(input) { 
  let separate = input.split("");
  if(separate.length < 4) {
    return "Number is too small";
  }
  let cell = [];
  for(let i = 0; i < separate.length; i++) {
    cell.push(separate[i] * separate[i + 1] * separate[i + 2] * separate[i + 3]);
  }

  let order = cell.sort(compareNumbers);
  return order[0];
}



lowestProduct=(a,b=a.length)=>b<4?'Number is too small':Math.min(...[...Array(b-3)].map((_,i)=>a.slice(i,i+4).split``.reduce((a,b)=>a*b)))



function lowestProduct(input) { 
  if (input.length < 4) {
      return 'Number is too small';
  } else {
      let obj = {}, arr = [];
      for (let i = 0; i < input.length - 3; i++) {
          let s = input.split('').splice(i, 4).reduce((acc, num) => acc * Number(num), 1);
          arr.push(s);
      }
      return Math.min.apply(null, arr);
  }
}


