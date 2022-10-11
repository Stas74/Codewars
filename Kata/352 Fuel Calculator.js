// Fuel Calculator

/*
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, 
purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, 
up to a maximum discount of 25 cents per litre. 
But total discount per litre cannot be more than 25 cents. 
Return the total cost rounded to 2 decimal places. 
Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents
*/

function fuelPrice(litres, pricePerLitre) {
  let discount = litres >= 10 ? 0.25 : litres >= 8 ? 0.2 : litres >= 6 ? 0.15 : litres >= 4 ? 0.1 : litres >= 2 ? 0.05 : 0;
  return +(litres * pricePerLitre - litres * discount).toFixed(2);
}



console.log(fuelPrice(5, 1.23)); // 5.65
console.log(fuelPrice(8, 2.5)); // 18.40
console.log(fuelPrice(5, 5.6)); // 27.50




function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i +=2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}



function fuelPrice(litres, pricePerLiter) {
  var discount = Math.min(Math.floor(litres/2) * 0.05, 0.25);
  var price = litres * (pricePerLiter - discount);
  return Math.round(price*100) / 100;
}



function fuelPrice(l, p) {
  return Math.round(100 * l * Math.max(p - 0.05 * ~~(l / 2), p - 0.25)) / 100;
}


const fuelPrice = (litres, pricePerLiter) =>
  +(litres * (pricePerLiter - Math.min((litres / 2 ^ 0) * 0.05, 0.25))).toFixed(2);
