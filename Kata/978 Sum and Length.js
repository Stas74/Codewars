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
