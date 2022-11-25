// Basic Math (Add or Subtract)

/*
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

function calculate(str) {
  str = str.split("plus").join("+");
  str = str.split("minus").join("-");
  return eval(str)+"";
}

console.log(calculate("1plus2plus3plus4")); //  "10"
console.log(calculate("1minus2minus3minus4")); //  "-8"
console.log(calculate("1plus2plus3minus4")); // "2"
