// The Office IV - Find a Meeting Room

/*
Your job at E-Corp is both boring and difficult. 
It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, 
and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? 
Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/

function meeting(x) {
  return x.includes("O") ? x.findIndex((val) => val == "O") : "None available!";
}

console.log(meeting(["X", "O", "X"])); // 1
console.log(meeting(["O", "X", "X", "X", "X"])); // 0
console.log(meeting(["X", "X", "X", "X", "X"])); // 'None available!'




meeting = x => (x = x.join('').indexOf('O')) > -1 ? x : 'None available!'


const meeting = x =>
  !x.includes(`O`) ? `None available!` : x.indexOf(`O`);

function meeting(x){
  return x.indexOf("O") != -1 ? x.indexOf("O") : "None available!";
}
