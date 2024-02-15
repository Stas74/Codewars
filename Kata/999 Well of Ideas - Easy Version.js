// Well of Ideas - Easy Version

/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x) {
  return x.indexOf('good') == -1 ? 'Fail!' : x.filter(el => el == 'good').length < 3 ? 'Publish!' : 'I smell a series!'; 
}

console.log(well(["bad", "bad", "bad"])); // 'Fail!'
console.log(well(["good", "bad", "bad", "bad", "bad"])); // 'Publish!'
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
); // 'I smell a series!'
