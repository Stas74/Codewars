// Price of Mangoes

/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), 
calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
*/

function mango(quantity, price){
  return quantity % 3 === 0 ? quantity / 3 * price * 2 : (quantity - quantity % 3) / 3 * price * 2 + quantity % 3 * price
}


console.log(mango(3, 3))  // 6
console.log(mango(9, 5))  // 30
console.log(mango(5, 3))  // 12




function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}


function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}
