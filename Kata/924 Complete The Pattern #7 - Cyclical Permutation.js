// Complete The Pattern #7 - Cyclical Permutation

/*
You have to write a function pattern which creates the following pattern (See Examples) upto desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Examples:

pattern(9):

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678

pattern(5):

12345
23451
34512
45123
51234

Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  let numArr = [];
  let finArr = [];
  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }
  finArr.push(numArr);
  for (let j = 1; j < n; j++) {
    finArr.push(
      finArr[j - 1].slice(-(n - 1)).concat(finArr[j - 1].slice(0, 1))
    );
  }
  return finArr.map((el) => el.join("")).join("\n");
}
// console.log("slice1 = ", finArr[0].slice(0,1));
// console.log("slice2 = ", finArr[0].slice(-3));
// console.log("push = ", finArr.push(finArr[0].slice(-3).concat(finArr[0].slice(0,1))));
// console.log(finArr);

console.log(pattern(4)); // "1234\n2341\n3412\n4123"
