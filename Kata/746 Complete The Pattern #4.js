// Complete The Pattern #4

/*
You have to write a function pattern which creates the following pattern upto n number of rows. 
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Examples:
pattern(4):

1234
234
34
4
pattern(6):

123456
23456
3456
456
56
6
Note: There are no blank spaces

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  if (n < 0) {
    return "";
  }
  let fullNumbersN = Array(n).fill(1).map((el, i) => el + i);
  return Array(n).fill(fullNumbersN).map((el,idx) => el.slice(idx).join("")).join("\n");
}

console.log(pattern(0)); // "12\n2"
console.log(pattern(2)); // "12\n2"
console.log(pattern(5)); // "12345\n2345\n345\n45\n5")
console.log(pattern(12)); // minus whole numbers 10,11,12
