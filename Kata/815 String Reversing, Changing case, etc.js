// String Reversing, Changing case, etc

/*

Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**

*/

function reverseAndMirror(s1, s2) {
  const first = [...s2].map(el => el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).reverse().join("");
  const secArr = [...s1].map(el => el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("");
  return `${first}@@@${[...secArr].reverse().join("") + secArr}`
}

s1 = "FizZ";
s2 = "buZZ";
console.log(reverseAndMirror(s1,s2)); //  "zzUB@@@zZIffIZz"



function reverseAndMirror(s1,s2) {
  s1 = [...s1].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
  s2 = [...s2].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join('')
  return `${s2}@@@${[...s1].reverse().join('')}${s1}`
}



function reverseAndMirror(s1,s2) {
  return s2.split('').reverse().map(symbol => symbol.toLowerCase() != symbol ? symbol.toLowerCase() : symbol.toUpperCase()).join('')
    + "@@@"
    + s1.split('').reverse().map(symbol => symbol.toLowerCase() != symbol ? symbol.toLowerCase() : symbol.toUpperCase()).join('')
    + s1.split('').map(symbol => symbol.toLowerCase() != symbol ? symbol.toLowerCase() : symbol.toUpperCase()).join('');
}



const reverseAndMirror = (s1, s2) =>
  (fn => `${fn(s2)}@@@${fn(s1)}${[...fn(s1)].reverse().join(``)}`)
  (str => [...str].map(val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]()).reverse().join(``));



const reverseAndMirror = (x, y) => `${reverse(y)}@@@${reverse(x)}${reverse(x).split``.reverse().join``}`;
const reverse = s => s.split``.reverse().map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join``;
