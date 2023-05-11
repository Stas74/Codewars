// Moves in squared strings (III)

/*

You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Let's now transform this string!

Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)
diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"

Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)
rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"

selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) 
It is initial string + string obtained by symmetry with respect to the main diagonal.

s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"

or printed for the last:

selfie_and_diag1

abcd|aeim
efgh|bfjn
ijkl|cgko 
mnop|dhlp

Task:

Write these functions diag_1_sym, rot_90_clock, selfie_and_diag1

and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s 
(fct will be one of diag_1_sym, rot_90_clock, selfie_and_diag1)

Examples:
s = "abcd\nefgh\nijkl\nmnop"

oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"

oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"

oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"

Notes:
The form of the parameter fct in oper changes according to the language. 
You can see each form according to the language in "Your test cases".

It could be easier to take these katas from number (I) to number (IV)

Bash Note: The output strings should be separated by \r instead of \n. See "Sample Tests".



*/


function rot90Clock(strng) {
  strng = diag1Sym(strng)
  return strng.split("\n").map(el => el.split("").reverse().join('')).join("\n")
}
function diag1Sym(strng) {
  let finArr = [];
  let arrStr = strng.split("\n");
  for (let i = 0; i < arrStr.length; i++) {  
    finArr.push(arrStr.map(el => el[i]).join(""))
  }
  return finArr.join("\n")
}
function selfieAndDiag1(strng) {
  let str = diag1Sym(strng).split("\n");
  return strng.split("\n").map((el, i) => el + "|" + str[i]).join("\n")
}

function oper(fct, s) {
  return fct(s);
}

let s = "abcd\nefgh\nijkl\nmnop"

console.log(diag1Sym(s)); // "aeim\nbfjn\ncgko\ndhlp"
console.log(rot90Clock(s)); // "miea\nnjfb\nokgc\nplhd"
console.log(selfieAndDiag1(s)); // "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"





const diag1Sym = s => s.map((v, i) => [...v].map((_, j) => s[j][i]).join(''))
const rot90Clock = s => diag1Sym(s).map(v => [...v].reverse().join(''))
const selfieAndDiag1 = s => {
  const r = diag1Sym(s)
  return s.map((v, i) => v + '|' + r[i])
}
const oper = (fct, s) => fct(s.split('\n')).join('\n')




const getFirstCharOfEach = (_, i, arr) => 
	arr.map(y => y.slice(i, i + 1)).join('')
  
const oper = (fct, s) => 
	fct(s.split('\n')).join('\n')

const rot90Clock = arr => 
	arr.reverse().map(getFirstCharOfEach)
  	
const diag1Sym = arr => 
	arr.map(getFirstCharOfEach)

const selfieAndDiag1 = arr => 
	diag1Sym(arr).map((x, i) => `${[...arr][i]}|${x}`)




function rot90Clock(str) {
  let c = diag1Sym(str);
  return c.split('\n').map(a=>a.split('').reverse().join('')).join('\n');
}
function diag1Sym(str) {
  let arr = str.split('\n');
  let s = [], t;
  for(let i = 0; i < arr.length; i += 1) {
    s.push(arr.map(a=>a[i]).join(''));
  }
  return s.join('\n');
}
function selfieAndDiag1(str) {
  let arr = str.split('\n');
  let s = diag1Sym(str).split('\n');
  return arr.map((a,i)=>a + '|' + s[i]).join('\n');
}
function oper(fct, s) {
  return fct(s);
}



const diag1Sym=s=>s.reduce((a,_,i,r)=>[...a,r.map(item => item[i]).join``],[]);
const rot90Clock=s=>diag1Sym(s).map(i=>[...i].reverse().join``)
const selfieAndDiag1=s=>diag1Sym(s).map((v,i)=>`${s[i]}|${v}`)
const oper=(c,s)=>c(s.split`\n`).join`\n`



diag1Sym = a => new Array(a[0].length).fill('').map((v,i) => a.reduce((aa, ac) => aa+ac.split('')[i], ''));
selfieAndDiag1 = a => a.map((w,i) => w + '|' + diag1Sym(a)[i]);
rot90Clock = a => diag1Sym(a).map(w => w.split('').reverse().join(''));
oper = (fct, s) => fct(s.split("\n")).join("\n");
