// Simple string characters

/*
In this Kata, you will be given a string and your task will be to return a list of ints 
detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

function solve(s) {
  let upper = (s.match(/[A-Z]/g) || []).length;
  let lower = (s.match(/[a-z]/g) || []).length;
  let numbers = (s.match(/[0-9]/g) || []).length;
  let special = s.length - upper - lower - numbers

  return [upper, lower, numbers, special];
}

console.log(solve("aAbBcC")); // [3,3,0,0]
console.log(solve("Codewars@codewars123.com")); // [1,18,3,2]



const solve = x => {
  let u = x.match(/[A-Z]/g)||[]
  let d = x.match(/[a-z]/g)||[]
  let n = x.match(/[0-9]/g)||[]
  let s = x.match(/[^A-Z0-9]/gi)||[]   // !!!!!!
  return [u.length, d.length, n.length, s.length]
}





const solve = (string) => (
  Object.values([...string].reduce((acc, char) => {
    if (/[A-Z]/.test(char)) {
      acc.upper++;
    } else if (/[a-z]/.test(char)) {
      acc.lower++;
    } else if (/[0-9]/.test(char)) {
      acc.number++;
    } else {
      acc.other++;
    }
    return acc;
  }, { upper: 0, lower: 0, number: 0, other: 0 }))
);



function solve(s){
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let b = "abcdefghijklmnopqrstuvwxyz";
  let c = '1234567890';
  let up = 0;
  let low = 0;
  let num = 0;
  let char = 0;
  s = s.split('');
  for(let i = 0; i < s.length; i++){
    if(a.includes(s[i])){up++};
    if(b.includes(s[i])){low++};
    if(c.includes(s[i])){num++};
    if(!a.includes(s[i]) && !b.includes(s[i]) && !c.includes(s[i])){char++};
  }
  return [up,low,num,char];
}
