// Mobile Display Keystrokes

/*
Do you remember the old mobile display keyboards? Do you also remember how inconvenient it was to write on it?
Well, here you have to calculate how many keystrokes you have to do for a specific word.

This is the layout:


Given a string, return the number of keystrokes necessary to type it. 
You can assume that the input will entirely consist of characters included in the mobile layout 
(lowercase letters, digits, and the symbols * and #).

Examples
"*#"       =>  2 (1 + 1)
"123"      =>  3 (1 + 1 + 1)
"abc"      =>  9 (2 + 3 + 4)
"codewars" => 26 (4 + 4 + 2 + 3 + 2 + 2 + 4 + 5)

*/

function mobileKeyboard(str) {
  let totalKeyStrokes = 0;
  for (let i = 0; i < str.length; i++) {
    /[0-9*#]/.test(str[i])
      ? (totalKeyStrokes += 1)
      : /[adgjmptw]/.test(str[i])
      ? (totalKeyStrokes += 2)
      : /[behknqux]/.test(str[i])
      ? (totalKeyStrokes += 3)
      : /[cfilorvy]/.test(str[i])
      ? (totalKeyStrokes += 4)
      : (totalKeyStrokes += 5);
  }
  return totalKeyStrokes;
}

console.log(mobileKeyboard("")); //  0
console.log(mobileKeyboard("123")); //  3
console.log(mobileKeyboard("zruf")); //  16
console.log(mobileKeyboard("#")); //  1




const map = ['1234567890*#','adgjmptw','behknqux','cfilorvy','sz']

function mobileKeyboard(str){
  return [...str].reduce((s,c)=>s+map.findIndex(l=>l.includes(c)),str.length);
}



function mobileKeyboard(str){
  const arr = ['1234567890*#', 'adgjmptw', 'behknqux', 'cfilorvy', 'sz']
  return [...str].reduce((a, e)=>a + arr.reduce((ac,el,i) =>ac + (el.includes(e) ? i+1 : 0), 0),0)
}



const mobileKeyboard = (function() {
  const keys = {
    a:2, b:3, c:4, d:2, e:3, f:4, g:2, h:3, i:4, j:2, k:3, l:4, m:2, 
    n:3, o:4, p:2, q:3, r:4, s:5, t:2, u:3, v:4, w:2, x:3, y:4, z:5,
    '*': 1, '#':1, 1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1, 0:1
  };
  
  return function(str) {
    return str.split('').reduce((amt, ch) => amt+keys[ch], 0);    
  };
})();




const strokes = new Map([
  ...Array.from("0123456789*#", c => [c, 1]),
  ...Array.from("adgjmptw", c => [c, 2]),
  ...Array.from("behknqux", c => [c, 3]),
  ...Array.from("cfilorvy", c => [c, 4]),
  ...Array.from("sz", c => [c, 5]),
])

function mobileKeyboard(str) {
  return Array.from(str).reduce((n, c) => n + strokes.get(c), 0)
}




function mobileKeyboard(s) {
  return s.split``.reduce((s, c) => s + ("123456789*0#".indexOf(c) !== -1 ? 1 : "adgjmptw".indexOf(c) !== -1 ? 2 : "behknqux".indexOf(c) !== -1 ? 3 : "cfilorvy".indexOf(c) !== -1 ? 4 : 5), 0);
}



const mobileKeyboard = str =>
  [...str].reduce((pre, val) => pre + (/[\d*#]/.test(val) ? 1 : /[adgjmptw]/.test(val) ? 2 : /[behknqux]/.test(val) ? 3 : /[cfilorvy]/.test(val) ? 4 : 5), 0);
