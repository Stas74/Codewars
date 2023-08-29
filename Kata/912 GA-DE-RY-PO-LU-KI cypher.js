// GA-DE-RY-PO-LU-KI cypher

/*
The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. 
The encryption is based on short, easy to remember key. 
The key is written as paired letters, which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".

 G => A
 g => a
 a => g
 A => G
 D => E
  etc.
The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

Task
Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

Input/Output
The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

Example
 encode("ABCD")          // => GBCE 
 encode("Ala has a cat") // => Gug hgs g cgt 
 encode("gaderypoluki"); // => agedyropulik
 decode("Gug hgs g cgt") // => Ala has a cat 
 decode("agedyropulik")  // => gaderypoluki
 decode("GBCE")          // => ABCD

GA-DE-RY-PO-LU-KI
 */

const dictionary = {
  G: 'A',
  A: 'G',
  D: 'E',
  E: 'D',
  R: 'Y',
  Y: 'R',
  P: 'O',
  O: 'P',
  L: 'U',
  U: 'L',
  K: 'I',
  I: 'K',
  g: 'a',
  a: 'g',
  d: 'e',
  e: 'd',
  r: 'y',
  y: 'r',
  p: 'o',
  o: 'p',
  l: 'u',
  u: 'l',
  k: 'i',
  i: 'k',
}

function encode(str) {
  return str.split("").map(el => dictionary[el] || el).join('')
}

function decode(str) {
  return str.split("").map(el => dictionary[el] || el).join('')
}

console.log(encode("Ala has a cat")); // "Gug hgs g cgt"
console.log(decode("Gug hgs g cgt")); // "Ala has a cat"

console.log(encode("ABCD")); // "GBCE"
console.log(encode("GBCE")); // "ABCD"




const dict = {
  G: "A", A: "G", D: "E", E: "D", 
  R: "Y", Y: "R", P: "O", O: "P", 
  L: "U", U: "L", K: "I", I: "K", 
  g: "a", a: "g", d: "e", e: "d", 
  r: "y", y: "r", p: "o", o: "p", 
  l: "u", u: "l", k: "i", i: "k", 
}

const encode = s => s.replace(/./g, c => dict[c] || c)
const decode = encode



const key = `GADERYPOLUKIgaderypoluki`;

const encode = str =>
  str.replace(new RegExp(`[${key}]`, `g`), val =>
    (idx => idx % 2 ? key[--idx] : key[++idx])
    (key.indexOf(val)));

const decode = encode;




const rule = 'GA-DE-RY-PO-LU-KI'.split('-');
const code = [...rule, ...rule.map(x => x.toLowerCase())];

const swapToObj = (acc, curr) => {
	return acc[curr[0]] = curr[1], acc[curr[1]] = curr[0], acc;
}
  
const cypher = code => str =>
	str.replace(/./g, x => code[x] || x);

const encode = cypher(code.reduce(swapToObj, {}));
const decode = encode;




function encode(str) 
{
    var Case=str.split('').map(a=>a==a.toUpperCase()? 1:0);
    return str.toLowerCase()
              .replace(/g|a|d|e|r|y|p|o|l|u|k|i/g,(a)=>a=='g'? 'a': a=='a'? 'g': a=='d'?'e':a=='e'?'d':a=='r'?'y':a=='y'?'r':a=='p'?'o':a=='o'?'p':a=='l'?'u':a=='u'?'l':a=='k'?'i':'k')
              .split('')
              .map((a,i)=>Case[i]==1? a.toUpperCase():a)
              .join('');
}

function decode(str) 
{
    return encode(str);
}




