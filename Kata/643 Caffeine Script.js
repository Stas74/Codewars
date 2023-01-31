// Caffeine Script

/*
Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

Examples
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"
*/

function caffeineBuzz(n) {
  if (n % 3 == 0 && n % 4 == 0) {
    return n % 2 == 0 ? "CoffeeScript" : "Coffee";
  }
  if (n % 3 == 0) {
    return n % 2 == 0 ? "JavaScript" : "Java";
  }
  return "mocha_missing!"
}

console.log(caffeineBuzz(1)); // "mocha_missing!"
console.log(caffeineBuzz(3)); // "Java"
console.log(caffeineBuzz(6)); // "JavaScript"
console.log(caffeineBuzz(12)); // "CoffeeScript"




function caffeineBuzz(n){
  if (n % 12 === 0) return "CoffeeScript";
  if (n % 6 === 0) return "JavaScript";
  if (n % 3 === 0)  return "Java";
  return "mocha_missing!";
}



function caffeineBuzz(n){
  return (n % 3 == 0) ? ((n % 4 == 0) ? "Coffee" : "Java") + ((n % 2 == 0) ? "Script" : "") : "mocha_missing!";
}



const caffeineBuzz = n =>
  !(n % 3) ? `${!(n % 4) ? `Coffee` : `Java`}${!(n % 2) ? `Script` : ``}` : `mocha_missing!`;
