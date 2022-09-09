// Tip Calculator

/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
*/

function calculateTip(amount, rating) {
  const table = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2
  }
  return table[rating.toLowerCase()] === undefined ? "Rating not recognised" : Math.ceil(amount * table[rating.toLowerCase()])
}


console.log(calculateTip(20, "Excellent"))  // 4
console.log(calculateTip(26.95, "good"))  // 3
console.log(calculateTip(26.95, "Noo"))  // "Rating not recognised"
