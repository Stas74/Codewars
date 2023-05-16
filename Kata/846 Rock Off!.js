// Rock Off!

/*

Alice and Bob have participated to a Rock Off with their bands. 
A jury of true metalheads rates the two challenges, awarding points to the bands on a scale from 1 to 50 
for three categories: Song Heaviness, Originality, and Members' outfits.

For each one of these 3 categories they are going to be awarded one point, 
should they get a better judgement from the jury. No point is awarded in case of an equal vote.

You are going to receive two arrays, containing first the score of Alice's band and then those of Bob's. 
Your task is to find their total score by comparing them in a single line.

Example:

Alice's band plays a Nirvana inspired grunge and has been rated 20 for Heaviness, 
32 for Originality and only 18 for Outfits. 
Bob listens to Slayer and has gotten a good 48 for Heaviness, 25 for Originality and a rather honest 40 for Outfits.

The total score should be followed by a colon : and by one of the following quotes: 
if Alice's band wins: Alice made "Kurt" proud! 
if Bob's band wins: Bob made "Jeff" proud! 
if they end up with a draw: that looks like a "draw"! Rock on!

The solution to the example above should therefore appear like '1, 2: Bob made "Jeff" proud!'.

*/

function solve(a, b) {
  let arr = [0, 0];
  a.map((el, i) =>
    el > b[i] ? (arr[0] += 1) : el < b[i] ? (arr[1] += 1) : (arr[0] += 0)
  );
  return `${arr[0]}, ${arr[1]}: ${
    arr[0] > arr[1]
      ? 'Alice made "Kurt" proud!'
      : arr[0] < arr[1]
      ? 'Bob made "Jeff" proud!'
      : 'that looks like a "draw"! Rock on!'
  }`;
}

console.log(solve([47, 7, 2], [47, 7, 2])); // '0, 0: that looks like a "draw"! Rock on!'
console.log(solve([47, 67, 22], [26, 47, 12])); // '3, 0: Alice made "Kurt" proud!'
console.log(solve([25, 50, 22], [34, 49, 50])); // '1, 2: Bob made "Jeff" proud!'




function solve(a, b) {
  let [x, y] = [0,0];
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) x++;
    else if (a[i] < b[i]) y++;
  }
  if (x > y) return `${x}, ${y}: Alice made "Kurt" proud!`;
  else if (x < y) return `${x}, ${y}: Bob made "Jeff" proud!`;
  else return `${x}, ${y}: that looks like a "draw"! Rock on!`;
}



function solve(a, b) {
  let pl1 = 0;
  let pl2 = 0;  
  a.forEach((cur, i) => cur > b[i] ? pl1++ : cur < b[i] ? pl2++ : 0);  
  return `${pl1}, ${pl2}: ${pl1 > pl2 ? 'Alice made "Kurt" proud!' : pl1 < pl2 ? 'Bob made "Jeff" proud!' : 'that looks like a "draw"! Rock on!'}`;
}



const solve = (a, b) =>
  ((a, b) => `${a}, ${b}: ${a === b ? `that looks like a "draw"! Rock on!` : `${a > b ? `Alice made "Kurt` : `Bob made "Jeff`}" proud!`}`)
  (...a.reduce((pre, val, idx) => [pre[0] + (val > b[idx]), pre[1] + (val < b[idx])], [0, 0]));




const wins = (a, b) => a.reduce((n, m, i) => n + (m > b[i]), 0);

function solve(a, b) {
  const x = wins(a, b)
  ,     y = wins(b, a);  
  const quotes = [ 
    'Alice made "Kurt" proud!',
    'Bob made "Jeff" proud!',
    'that looks like a "draw"! Rock on!' 
  ];  
  return `${x}, ${y}: ${quotes[(x <= y) + (x === y)]}`;     
}



const solve = (a, b) => (s =>
  `${s[0]}, ${s[1]}: ${s[0] == s[1]
    ? 'that looks like a "draw"! Rock on!'
    : `${s[0] > s[1] ? 'Alice made "Kurt"' : 'Bob made "Jeff"'} proud!`}`
)(a.reduce((r, e, i) => [r[0] + (e > b[i]), r[1] + (b[i] > e)], [0, 0]));
