// Last

/*
Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4

In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/


function last(list){
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}

// function last(list) {
//   if (typeof list === "string" || typeof list === "object") {
//     return list[list.length - 1];
//   }
//   if (arguments.length > 1) {
//     return arguments[arguments.length - 1];
//   }
//   return arguments;
// }

console.log(last([1, 2, 3, 4, 5])); // 5 --> array
console.log(last("abcde")); // e --> string
console.log(last(1, "b", 3, "d", 5)); // 5 --> arguments
