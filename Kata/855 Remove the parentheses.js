// Remove the parentheses

/*

Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. 
Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.

*/

function removeParentheses(s) {
  // let firstIndex = s.indexOf("(");
  // let lastIndex = s.lastIndexOf(")");
  // return s.slice(0, firstIndex) + s.slice(lastIndex + 1);

  while (s.indexOf("(") != -1) {
    // if (s.lastIndexOf("(") > s.indexOf(")")) {
      
    // }
    s = s.slice(0, s.indexOf("(")) + s.slice(s.indexOf(")") + 1);
  }
  return s;
}

const removeParentheses = s => {
  let startDeleteCount = 0;
  let newLetters = [];
  s.split('').forEach(el => {
    if (el === '(') {
      startDeleteCount++;
    } else if (el === ')') {
      startDeleteCount--;
    } else if (startDeleteCount < 1) newLetters.push(el);
  });
  return newLetters.join('');
}

// function removeParentheses(s) {
//   return s.replace(/\([\s\S]*?\)/g, "");
// }

// .replace(/ *\([^)]*\) */g, ""

console.log(removeParentheses("example(unwanted thing)example")); // "exampleexample"
console.log(removeParentheses("example (unwanted thing) example")); // "example  example"
console.log(removeParentheses("a (bc d)e")); // "a e"
console.log(removeParentheses("a(b(c))")); // "a"
console.log(removeParentheses("hello example (words(more words) here) something")); // "hello example  something"
console.log(removeParentheses("(first group) (second group) (third group)")); // "  "




function removeParentheses(s){
  let r = 0
  let x = ''
  for (let c of s) {
    if (c=='(') r++
    if (r==0) x+=c
    if (c==')') r--
  }
  return x
}


function removeParentheses(s){
  let result = "";
  let count = 0;
  for (let letter of s){
    if (letter == "(") count += 1;
    if (count == 0) result += letter;
    if (letter == ")") count -= 1
  }
  return result
}



function removeParentheses(s){
  while (s.match(/\([\w ]+\)/g)) {
    s = s.replace(/\([\w ]+\)/g ,'');
  }  
  return s;  
}



const removeParentheses = s => s.includes('(') ? removeParentheses(s.replace(/\([^()]*?\)/, '')) : s;



function removeParentheses(s){
  let lvl=0;
  return [...s].filter(c=>{ lvl+=c=='(';
                            let keep = !lvl;
                            lvl -= c==')';
                            return keep; })
               .join('')
}



const removeParentheses = s =>
  /\(/.test(s) ? removeParentheses(s.replace(/\([^()]*\)/, ``)) : s;
