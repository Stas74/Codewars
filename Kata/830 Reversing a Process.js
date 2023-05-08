// Reversing a Process

/*

Suppose we know the process by which a string s was encoded to a string r (see explanation below). 
The aim of the kata is to decode this string r to get back the original string s.

Explanation of the encoding process:
input: a string s composed of lowercase letters from "a" to "z", and a positive integer num
we know there is a correspondence between abcde...uvwxyzand 0, 1, 2 ..., 23, 24, 25 : 0 <-> a, 1 <-> b ...
if c is a character of s whose corresponding number is x, apply to x the function f: x-> f(x) = num * x % 26, 
then find ch the corresponding character of f(x)
Accumulate all these ch in a string r
concatenate num and r and return the result
For example:

encode("mer", 6015)  -->  "6015ekx"

m --> 12,   12 * 6015 % 26 = 4,    4  --> e
e --> 4,     4 * 6015 % 26 = 10,   10 --> k
r --> 17,   17 * 6015 % 26 = 23,   23 --> x

So we get "ekx", hence the output is "6015ekx"
Task
A string s was encoded to string r by the above process. complete the function to get back s whenever it is possible.

Indeed it can happen that the decoding is impossible for strings composed of whatever letters from "a" to "z" 
when positive integer num has not been correctly chosen. In that case return "Impossible to decode".

Examples
decode "6015ekx" -> "mer"
decode "5057aan" -> "Impossible to decode"

*/

function decode(r) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  const number = +r.replace(/[a-z]/g, "");
  const letters = r.replace(/[\d]/g, "");
  [...letters].forEach((char) => {
    const index = alphabet.indexOf(char);
    for (let i = 0; i < 26; i++) {
      if ((i * number) % 26 === index) {
        result += alphabet[i];
      }
    }
  });
  if (result.length !== letters.length) {
    return "Impossible to decode";
  }
  return result;
}

console.log(decode("6015ekx")); // "mer"
console.log(decode("5057aan")); // "Impossible to decode"



const startCharASCII = 97;
const letterCount = 26;

function decode(r) {
    var num = parseInt(r);
    var letters = [];
    var codes = [];
    for (var i = 0; i < letterCount; i++) {
        letters[i] = String.fromCharCode(startCharASCII + i);
        codes[i] = String.fromCharCode(i * num % letterCount + startCharASCII);
    }
    if (Array.from(new Set(codes)).length != letterCount) return 'Impossible to decode';
    return r.split(num)[1].split('').map((v, i, a) => letters[codes.indexOf(v)]).join('');
}



function decode(r) {
    let a = "abcdefghijklmnopqrstuvwxyz"
    let m = r.match(/(\d+)([a-z]+)/);
    let nb = parseInt(m[1]) % 26;
    let s = m[2];
    let dict={3:9, 9:3, 21:5, 5:21, 7:15, 15:7, 11:19, 19:11, 17:23, 23:17, 25:25, 1:1}
    let n = dict[nb];
    if (n === undefined)
        return "Impossible to decode";
    var res = "";
    for (let c of s)
        res += a[(a.indexOf(c) * n) % 26];
    return res;
}



decode=r=>{
  const m={},[x,k,s]=r.match(/(\d+)(.*)/);
  for (let i=0;i<26;i++) m[i*k%26]=String.fromCharCode(i+97);  
  return k%2&&k%13?[...s].map(e=>m[e.charCodeAt``-97]).join``:'Impossible to decode';
}



const decode = (a, [b, c] = a.match(/\d+|\D+/g), d=new Set([...Array(26)].map((_,a)=>a* +b%26)).size<26) => d ? 'Impossible to decode' : c.split``.map(a=>{    
  let c = 0;
  while (c * +b % 26 !== a.charCodeAt() - 97) c++;    
  return String.fromCharCode(c + 97)
}).join``;
