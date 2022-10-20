// Char Code Calculation

/*
Given a string, turn each character into its ASCII character code and join them together to create a number 
- let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

function calc(x){
  let total1 = [...x].map(el => el.charCodeAt()).join("")
  let total2 = [...total1].map(el => el == "7" ? el = "1" : el)
  return [...total1].reduce((prev, cur) => prev + +cur,0) - [...total2].reduce((prev, cur) => prev + +cur,0)
}

console.log(calc('abcdef')) // 6
console.log(calc('aaaaaddddr')) // 30




function calc(x){
  let sum = n => [...n].reduce((a,b) => +a + +b);
  let total1 = x.replace(/./g, x => x.charCodeAt(0));
  let total2 = total1.replace(/7/g,'1');
  return sum(total1) - sum(total2);
}


const calc = x =>
  x.replace(/./g, val => val.charCodeAt()).replace(/[^7]/g, ``).length * 6;


function calc(x){
  return x
    .split('')
    .map(c => c.charCodeAt(0))
    .join('')
    .split('')
    .map(Number)
    .filter(x => x === 7)
    .length * 6
}
