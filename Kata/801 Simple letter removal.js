// Simple letter removal

/*

In this Kata, you will be given a lower case string and your task will be to remove k characters 
from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.
For example: 
solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
solve('abracadabra', 8) = 'rdr'
solve('abracadabra',50) = ''
More examples in the test cases. Good luck!

*/

function solve(s, k) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < abc.length; i += 1) {
    while (s.includes(abc[i]) && k > 0) {
      s = s.replace(abc[i], "");
      k -= 1;
    }
  }
  return s;
}


console.log(solve("abracadabra", 1)); // 'bracadabra'
console.log(solve("abracadabra", 2)); // 'brcadabra'
console.log(solve("abracadabra", 6)); // 'rcdbr'
console.log(solve("abracadabra", 8)); // 'rdr'




const solve = (s, k) =>
  [...s].sort().slice(0, k).reduce((pre, val) => pre.replace(val, ``), s);



function solve(s, k) {
  let r = s.split("").sort().slice(0, k);
  for (let i = 0; i < r.length; i++) s = s.replace(r[i], "");
  return s;
}


function solve(s, k){
  const indexPair = (e,i) => [e,i];
  const byLetterIndex = (a,b) => a[0].localeCompare(b[0]) || a[1] - b[1];
  const byIndex = (a,b) => a[1] - b[1];
  
  let letters = s.split('').map(indexPair).sort(byLetterIndex).slice(k);
    
  return letters.sort(byIndex).map(e => e[0]).join('');
}



// recursion, iterative process

function solve(s, k, ch = 'a') {
  if (!k || !s) return s
  if (!s.includes(ch)) return solve(s, k, String.fromCharCode(ch.charCodeAt`` + 1))
  s = s.replace(ch, '')
  return solve(s, k-1, ch)
}



const solve = (s, k, a='abcdefghijklmnopqrstuvwxyz') =>  k ? solve( s.replace( a[a.split``.findIndex(e=> s.includes(e))],''),k-1,a):s;
