// Zero-plentiful Array

/*
An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

Examples
[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0 
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros
*/

function zeroPlentiful(arr) {
  const removeNonZerosArr = arr.map((el) => (el == 0 ? 0 : " "));
  const zerosArrWithoutSpaces = removeNonZerosArr.join("").replace(/\s+/g, " ").trim().split(" ");
  return zerosArrWithoutSpaces.every(el => el.length > 3) ? zerosArrWithoutSpaces.length : 0;
}

console.log(zeroPlentiful([0, 0, 0, 0, 0, 1])); // 1
console.log(zeroPlentiful([0, 0, 0, 0, 1, 0, 0, 0, 0])); // 2
console.log(zeroPlentiful([0, 0, 0, 0, 1, 0])); // 0
console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0])); // 0




function zeroPlentiful(arr){
  var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
  return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
}



function zeroPlentiful(arr) {
  let count = 0
  let total = 0
  for (const x of arr) {
    if (x === 0) {
      if (count++ === 3) {
        total++
      }
    } else {
      if (count > 3) {
        count = 0
      } else if (count > 0) {
        count = 0
        total = 0
        break
      }
    }
  }
  return count > 0 && count < 4 ? 0 : total
}



function zeroPlentiful(arr) {
  let counter = [];
  let index = 0;
  arr.forEach((num, idx) => {
   if (num === 0) {
     counter[index] = counter[index] ? counter[index] + 1 : 1;
   } else {
     index = counter.length;
   } 
  });
  return counter.every(item => item >= 4) ? counter.length : 0;
}



function zeroPlentiful(arr, a=arr.join``){
  return !/(?<!0)0{1,3}(?!0)/.test(a)?(a.match(/0{4,}/g)||'').length:0;
}



function zeroPlentiful(arr){
   const sequence = arr.map(num => num !== 0 ? '.' : num).join('').split('.').filter(x => x.length > 0);
    const zeros = sequence.filter(elem => elem.length >= 4);
    return zeros.length == sequence.length ? zeros.length : 0;
}
