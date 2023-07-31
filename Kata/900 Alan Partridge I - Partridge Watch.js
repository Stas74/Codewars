// Alan Partridge I - Partridge Watch

/*
To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, 
We have a new series of kata arranged around the great man himself.

Task
Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the number of Alan related terms 
you find in the given array (x). The related terms are as follows:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad

If you don't find any related terms, return 
Lynn, I've pierced my foot on a spike!!
*/

function part(x) {
  const words = [
    "Partridge",
    "PearTree",
    "Chat",
    "Dan",
    "Toblerone",
    "Lynn",
    "AlphaPapa",
    "Nomad",
  ];
  let total = x.filter((el) => words.includes(el));
  return total.length == 0
    ? "Lynn, I've pierced my foot on a spike!!"
    : `Mine\'s a Pint${"!".repeat(total.length)}`;
}

console.log(part(["Grouse", "Partridge", "Pheasant"])); // 'Mine\'s a Pint!'
console.log(part(["Pheasant", "Goose", "Starling", "Robin"])); // 'Lynn, I\'ve pierced my foot on a spike!!'



const part = x =>
  (val => val ? `Mine's a Pint` + `!`.repeat(val) : `Lynn, I've pierced my foot on a spike!!`)
  (x.filter(val => [`Partridge`, `PearTree`, `Chat`, `Dan`, `Toblerone`, `Lynn`, `AlphaPapa`, `Nomad`].includes(val)).length);



function part(x){
  let arr = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
  let count = x.filter(item => arr.includes(item)).length
  return (count > 0) ? 'Mine\'s a Pint!' + '!'.repeat(count-1) : 'Lynn, I\'ve pierced my foot on a spike!!'
}



function part(x){
  var count = x.filter(e => ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad'].indexOf(e) != -1).length;
  return count > 0 ? 'Mine\'s a Pint' + '!'.repeat(count) : 'Lynn, I\'ve pierced my foot on a spike!!';
}



const part = ($) => {
  let list = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
  let out = $.filter(el => list.includes(el)) || []
  return out.length ? 'Mine\'s a Pint' + '!'.repeat(out.length) : 'Lynn, I\'ve pierced my foot on a spike!!'
}
