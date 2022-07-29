// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let finString = "";
  for (let char of string) {
    char === char.toUpperCase()
      ? (finString += " " + char)
      : (finString += char);
  }
  return finString;
}

console.log(solution("camelCasing")); // "camel Casing"




function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}


const solution = string => string.replace(/[A-Z]/g, ' $&');


