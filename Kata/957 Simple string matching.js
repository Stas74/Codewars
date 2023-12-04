// Simple string matching

/*
You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. 
The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. 
No other character of string a can be replaced. 
If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

If the string matches, return true else false.

For example:

solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string. 
solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string. 
solve("codewars","codewars") = true, because the strings already match.
solve("a","b") = false
solve("*", "codewars") = true

More examples in test cases.

Good luck!

*/

function solve(a, b) {
  return new RegExp(`^${a.replace(/\*/g, '(.)*')}$`, '').test(b);  
}

// if (/[*]/.test(a)) {
//     let arrA = a.split("*");
//     return b.includes(arrA[0]) && b.includes(arrA[1]);
//   }
//   return a === b;


console.log(solve("code*s", "codewars")); // true
console.log(solve("codewar*s", "codewars")); // true
console.log(solve("code*warrior", "codewars")); // false
console.log(solve("c", "c")); // true
console.log(solve("*s", "codewars")); // true
console.log(solve("*s", "s")); // true



const solve =(a,b) => new RegExp(`^${a.replace('*','.*')}$`).test(b);



function solve(a,b){
  let asterix = a.split('*')
  if (asterix.length === 1){ return a === b }
  return b.startsWith(asterix[0]) && b.endsWith(asterix[1]) && a.length <= b.length + 1
}



solve=(a,b)=>new RegExp('^'+a.replace('*','.*')+'$').test(b)



function solve(a, b) {
  const regexp = new RegExp('^' + a.replace('*', '.*') + '$');
  return regexp.test(b);
}



const solve = (a, b) =>
  new RegExp(`^${a.replace(`*`, `.*`)}$`).test(b);



function solve(a,b){
    a = a.replace("*", "\\S*");
    var re = new RegExp(a);
    return b.match(re) == b ? true : false
}



