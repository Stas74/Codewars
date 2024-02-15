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



const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}



function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}




function well(x) {
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}




const well = x =>
  (val => val ? val > 2 ? `I smell a series!` : `Publish!` : `Fail!`)
  (x.filter(val => val === `good`).length);



const well = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';
