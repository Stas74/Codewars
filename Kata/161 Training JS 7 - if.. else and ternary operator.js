// Training JS #7: if..else and ternary operator

/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, 
function accept 1 parameters:n, n is the number of customers to buy hotdogs, 
different numbers have different prices (refer to the following table), 
return a number that the customer need to pay how much money.

number	price (cents)

n < 5	100
n >= 5 and n < 10	95
n >= 10	90

You can use if..else or ternary operator to complete it.
*/

function saleHotdogs(n){
  return n < 5 ? 100 * n : n >= 10 ? 90 * n : 95 * n;
}

console.log(saleHotdogs(1)) // 100
console.log(saleHotdogs(5)) // 475
console.log(saleHotdogs(10)) // 900
