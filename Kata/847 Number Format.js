// Number Format

/*

Format any integer provided into a string with "," (commas) in the correct places.

Example:

For n = 100000 the function should return '100,000';
For n = 5678545 the function should return '5,678,545';
for n = -420902 the function should return '-420,902'.

*/

var numberFormat = function (number) {
  return number.toLocaleString("en-US");
};

console.log(numberFormat(100000)); // '100,000'
console.log(numberFormat(5678545)); // '5,678,545'
console.log(numberFormat(-420902)); // '-420,902'
