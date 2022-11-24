// Special Number (Special Numbers Series #5)

/*
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .

Notes
The number passed will be positive (N > 0) .

All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples

specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5] .

specialNumber(9) ==> return "NOT!!"
Explanation:
Although, it's a single-digit number but Outside the interval [1:5] .

specialNumber(23) ==> return "Special!!"
Explanation:
All the number's digits formed from the interval [0:5] digits .

specialNumber(39) ==> return "NOT!!"
Explanation:
Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

specialNumber(59) ==> return "NOT!!"
Explanation:
Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

specialNumber(513) ==> return "Special!!"
specialNumber(709) ==> return "NOT!!"
*/

function specialNumber(n) {
  return String(n).split("").filter(el => /[0-5]/.test(el)).length == String(n).length ? "Special!!" : "NOT!!";
}

console.log(specialNumber(2)); //  "Special!!"
console.log(specialNumber(3)); //  "Special!!"
console.log(specialNumber(6)); //  "NOT!!"
console.log(specialNumber(26)); //  "NOT!!"
console.log(specialNumber(3011)); //  "Special!!"
console.log(specialNumber(2783)); // "NOT!!"
