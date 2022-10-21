// Disarium Number (Special Numbers Series #3)

/*
Disarium number is the number that The sum of its digits powered with 
their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .


Notes
Number passed is always Positive .
Return the result as String

Input >> Output Examples

disariumNumber(89) ==> return "Disarium !!"

Explanation:
Since , 8^1 + 9^2 = 89 , thus output is "Disarium !!"

disariumNumber(564) ==> return "Not !!"

Explanation:
Since , 5^1 + 6^2 + 4^3 = 105 != 564 , thus output is "Not !!"
*/

function disariumNumber(n){
  return [...n+""].map((el, index) => el ** (index + 1)).reduce((prev, cur) => prev + cur) == n ? "Disarium !!" : "Not !!"  
}

console.log(disariumNumber(89)); // "Disarium !!"
console.log(disariumNumber(564)); // "Not !!"
console.log(disariumNumber(1024)); // "Not !!"
console.log(disariumNumber(135)); // "Disarium !!"
