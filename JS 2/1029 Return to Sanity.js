// Return to Sanity

/*
This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}

*/

// function mystery() {
//   var results = { sanity: "Hello" };
//   return results;
// }

function mystery() {
  return { sanity: "Hello" };
}

console.log(mystery()); //



const mystery = () => ({sanity: 'Hello'});



const sanity = { sanity: 'Hello' };
const mystery = () => sanity;



