// Converting integer to currency format

/*

Write a function that takes an integer in input and outputs a string with currency format.

Integer in currency format is expressed by a string of number where every three characters are separated by comma.

For example:

123456 --> "123,456"
Input will always be an positive integer, so don't worry about type checking or negative/float values.

*/

function toCurrency(price) {
  return price.toLocaleString("en-US");
}

console.log(toCurrency(123456)); // "123,456"
console.log(toCurrency(1234)); // "1,234"
console.log(toCurrency(123)); // "123"
console.log(toCurrency(123456789012)); // "123,456,789,012"



function toCurrency(price){
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}


function toCurrency(price){
	return price.toLocaleString();
}



function toCurrency(price) {
  return ("" + price).split('').reverse().map(function(v,i) {
    return i % 3 == 0 && i > 0 ? v + ',' : v;
  }).reverse().join('');
}


function toCurrency(price){
  var price = price.toString().split('');
  for (var i = price.length-3; i > 0; i -= 3) {
    price.splice(i, 0, ',');
  }
  return price.join('');
}


