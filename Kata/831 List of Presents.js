// List of Presents

/*

Leo's girlfriend asked him to buy a gift list during his next trip, 
now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; 
the second one is an array containing the price of each gift. 
You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

*/

function howManyGifts(maxBudget, gifts) {
  let counter = 0;
  let sortedArr = gifts.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    maxBudget -= sortedArr[i];
    if (maxBudget < 0) {
      return counter;
    }
    counter++;
  }
  return counter;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1])); // 4
console.log(howManyGifts(0, [1])); // 0




function howManyGifts(m, g) {
  var i = 0;
  g = g.sort(function (a, b) {
    return a - b;
  });
  for (; m - g[i] >= 0; i++) {
    m = m - g[i];
  }
  return i;
}



function howManyGifts(maxBudget, gifts){
  gifts.sort((a,b) => a-b)
  return gifts.filter(item => (maxBudget -= item) >= 0).length
}



function howManyGifts(maxBudget,gifts) {
  const n = gifts.slice().sort( (v,w) => v-w ).findIndex( v => (maxBudget-=v)<0 );
  return ~n ? n : gifts.length ;
}



function howManyGifts(maxBudget, gifts){
  return gifts.sort((a, b) => a - b)
    .reduce((a, c) => ((maxBudget -= c) >= 0 ? ++a : a), 0);
}



howManyGifts=(b,g)=>g.sort((a,b)=>a-b).filter(x=>(b-=x)>=0).length


