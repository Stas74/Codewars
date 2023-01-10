// Insert dashes

/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') 
between each two odd digits in num. 
For example: if num is 454793 the output should be 4547-9-3. 
Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
  const finArr = [];
  const arrNum = String(num).split("");
  for (let i = 0; i < arrNum.length; i++) {
    finArr.push(arrNum[i]);
    if (arrNum[i] % 2 != 0 && arrNum[i + 1] % 2 != 0 && arrNum[i + 1] != undefined) {
      finArr.push("-");
    }
  }
  return finArr.join("");
}

console.log(insertDash(454793)); // '4547-9-3'
console.log(insertDash(123456)); // '123456'
console.log(insertDash(1003567)); // '1003-567'
