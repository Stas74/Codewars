// Filter Coffee

/*
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. 
The prices in this string are to be sorted in ascending order.
*/

function search(budget, prices) {
  return prices.filter(el => el <= budget).sort((a,b) => a - b).join();
}

console.log(search(3, [6, 1, 2, 9, 2])); // "1,2,2"
console.log(search(14, [7, 3, 23, 9, 14, 20, 7])); // "3,7,7,9,14"



let search = (budget, prices) => prices
    .filter(p => p <= budget)
    .sort((a, b) => a - b)
    .join(',')


const search = (budget, prices) => prices.filter(v => v <= budget).sort((a, b) => a - b).toString();


const search = (budget, prices) =>
  `${prices.filter(val => val <= budget).sort((a, b) => a - b)}`;


