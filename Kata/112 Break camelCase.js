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
