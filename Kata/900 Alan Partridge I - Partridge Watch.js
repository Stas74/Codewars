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
