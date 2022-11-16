// Exclamation marks series #17 - Put the exclamation marks and question marks on the balance - are they balanced?

/*
Each exclamation mark's weight is 2; each question mark's weight is 3. 
Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; 
if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function total(arg) {
  return arg.split("").reduce((prev, cur) => prev + (cur == "!" ? 2 : 3), 0);
}

function balance(left, right) {
  const sumLeft = total(left);
  const sumRight = total(right);
  return sumLeft > sumRight ? "Left" : sumLeft < sumRight ? "Right" : "Balance";
}

console.log(balance("!!", "??")); // "Right"
console.log(balance("!??", "?!!")); // "Left"
console.log(balance("!?!!", "?!?")); // "Left"
console.log(balance("!!???!????", "??!!?!!!!!!!")); // "Balance"


function balance(left, right) {
  l = [...left].reduce((s, a) => s + (a == "?" ? 3 : 2), 0);
  r = [...right].reduce((s, a) => s + (a == "?" ? 3 : 2), 0);
  return l == r ? "Balance" : l > r ? "Left" : "Right";
}
