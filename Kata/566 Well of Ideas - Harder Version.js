// Well of Ideas - Harder Version

/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). 
All inputs may not be strings.
*/

function well(x) {
  const total = (x.join('').match(/good/gi) || []).length
  if (total > 2) return 'I smell a series!'
  if (total === 0) return 'Fail!'
  return 'Publish!'
}


// const boolArr = x.map((subArr) =>
//   subArr.map((el) => /good/gi.test(String(el))).filter((x) => x != false)
// );
// const lenArr = boolArr.map((sub) => sub.length);
// return lenArr.every((el) => el == 0)
//   ? "Fail!"
//   : lenArr.every((el) => el == 0 || el == 1)
//   ? "Publish!"
//   : "I smell a series!";

console.log(
  well([
    ["bad", "bAd", "bad"],
    ["bad", "bAd", "bad"],
    ["bad", "bAd", "bad"],
  ])
); // 'Fail!'
console.log(
  well([
    ["gOOd", "bad", "BAD", "bad", "bad"],
    ["bad", "bAd", "bad"],
    ["GOOD", "bad", "bad", "bAd"],
  ])
); // 'Publish!'
console.log(
  well([["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"], ["bad"], ["gOOd", "BAD"]])
); // 'I smell a series!'




function well(x) {
  let match = (''+x).match(/good/gi) || []
  if (match.length == 0) return 'Fail!'
  if (match.length <= 2) return 'Publish!'
  return 'I smell a series!'
}



const well = x => {
  const totalGoodIdeas = x.reduce((total, ideas) => total + (ideas.join('').match(/good/gi) || []).length, 0)
  if (totalGoodIdeas > 2) return 'I smell a series!'
  if (totalGoodIdeas === 0) return 'Fail!'
  return 'Publish!'
}


function well( x ) {
  const $ = x.toString().toLowerCase().split(/good/g).length-1
  return $ > 2 ? 'I smell a series!' : $ > 0 ? 'Publish!' : 'Fail!'
}
