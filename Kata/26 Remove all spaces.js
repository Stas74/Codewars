// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  let string = '';
  for (let chr of x) {
    if (chr != " ") {
      string += chr;
    }
  }
  // console.log(chr);
  return string;
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));  // '8j8mBliB8gimjB8B8jlB'
console.log(noSpace('8aaaaa dddd r     '));  // "8aaaaaddddr"

