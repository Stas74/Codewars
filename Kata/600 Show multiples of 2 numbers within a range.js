// Show multiples of 2 numbers within a range

/*
Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation
*/

// Javascript: return multiples into an array
function multiples(s1, s2, s3) {
  const finArr = [];
  let num = 1;
  while (num < s3) {
    if (num % s1 == 0 && num % s2 == 0) {
      finArr.push(num);
    }
    num++;
  }
  return finArr;
}

console.log(multiples(2, 4, 40)); // [4, 8, 12, 16, 20, 24, 28, 32, 36]
