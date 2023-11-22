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
