// String incrementer

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// function incrementString(str) {
//   let num = "";
//   let front = "";
//   for (let char of str) {
//     !isNaN(char) ? (num += char) : (front += char);
//   }
//   num = Number(num);
//   num += 1
//   console.log("front", front);
//   console.log("num", num);
// }

function incrementString(str) {
  const body = str.slice(0, -1);
  const lastDigit = str.slice(-1).match(/[0-9]/);
  return lastDigit === null
    ? str + "1"
    : lastDigit != 9
    ? body + (+lastDigit + 1)
    : incrementString(body) + "0";
}

console.log(incrementString("foobar000")); // "foobar001"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar99")); // "foobar100"




function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}



let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)


const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m));


