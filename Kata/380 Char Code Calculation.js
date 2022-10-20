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
