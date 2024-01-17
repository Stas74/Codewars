// Sum and Length

/*
In this kata you must return a string value, where the first part is the sum of positive numbers and 
the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...


For example :
sumLength([-1,2,3,4,0,1,0,-2,0,-3])
return '10 5' (10 = 1 + 2 + 3 + 4 and 5 = 3 + 2 => 3 negatives numbers + second 0 as negative)
*/

function sumLength(arr) {
  let positiveNumSum = arr.reduce((prev, cur) => prev + (cur > 0 ? cur : 0), 0);
  let negativeNumLength = arr.filter((el) => el < 0).length;
  let zeroLength = arr.filter((el) => el == 0).length;
  return `${positiveNumSum} ${
    negativeNumLength + (zeroLength % 2 != 0 ? Math.ceil(zeroLength / 2) : 0)
  }`;
}

console.log(sumLength([1, 2, 3, 4, -1, -2, -3])); // '10 3'
console.log(sumLength([1, 2, 3, 4, 0, -1, -2, -3])); // '10 4'
console.log(sumLength([-1, 2, 3, 4, 0, 1, 0, -2, 0, -3])); // '10 5'




function sumLength(arr) {
  l = r = n = 0;
  arr.map((a) => (a > 0 ? (l += a) : a == 0 ? n++ : r++));
  return l + " " + (r + Math.round(n / 2));
}



function sumLength(arr) {
  return `${arr.reduce((a, c) => a + (c > 0 ? c : 0), 0)} ${
    arr.filter((e) => e < 0).length +
    Math.ceil(arr.filter((e) => e == 0).length / 2)
  }`;
}



function sumLength(arr) {
  const output = [arr.reduce((a, b) => a + ((b > 0) * b), 0)]
  output.push(arr.reduce((a, b) => a + (b < 0), 0))
  output[1] += Math.ceil(arr.filter(num => num === 0).length / 2)
  return output.join(' ')
}



const sumLength = arr =>
  arr.filter(Boolean).reduce((pre, val) => (val > 0 ? pre[0] += val : ++pre[1], pre), [0, Math.ceil(arr.filter(val => !val).length / 2)]).join(` `);



function sumLength (arr) {
  const sum = arr.filter((x, i) => x > 0).reduce((a, b) => a + b, 0);
  let z = 0;
  const len = arr.filter((x, i) => x < 0 || (x == 0 && (z++) % 2 == 0)).length;
  return `${sum} ${len}`
}
