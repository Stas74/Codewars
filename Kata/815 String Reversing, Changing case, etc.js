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
