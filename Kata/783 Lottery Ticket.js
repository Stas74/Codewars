// Lottery Ticket

/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

To do this, you must first count the 'mini-wins' on your ticket. 
Each subarray has both a string and a number within it. 
If the character code of any of the characters in the string matches the number, you get a mini win. 
Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). 
If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.

*/

function bingo(ticket, win){
  let total = 0;
  ticket.map(el => el[0].split("").includes(String.fromCharCode(el[1])) ? total += 1 : total += 0);
  return total < win ? 'Loser!' : 'Winner!'
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)); // 'Loser!'
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)); // 'Winner!'
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)); // 'Loser!'



function bingo(ticket, win) {
  if (
    ticket.filter((a) => a[0].split("").some((b) => b.charCodeAt(0) == a[1]))
      .length >= win
  ) {
    return "Winner!";
  }
  return "Loser!";
}



function bingo(ticket, win){
  var count = 0;  
  ticket.forEach(game => {
    if (game[0].includes(String.fromCharCode(game[1]))) {
      count++;
    }
  });  
  return (count >= win) ? "Winner!" : "Loser!";
}



function bingo(ticket, win){
  return win <= ticket.filter(v => v[0].split('').some(vi => vi.charCodeAt(0) === v[1])).length ? 'Winner!' : 'Loser!';
}



const miniwin = pair => 
  pair[0].indexOf(String.fromCharCode(pair[1])) !== -1

const bingo = (ticket, win) =>
  ticket.map(miniwin).reduce((a, b) => a + b) >= win
  ? 'Winner!'
  : 'Loser!'



const bingo = (ticket, win) =>
  ticket.reduce((pre, [str, num]) => pre + [...str].some(val => val.charCodeAt() === num), 0) < win ? `Loser!` : `Winner!`;
