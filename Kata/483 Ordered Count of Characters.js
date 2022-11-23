// Ordered Count of Characters

/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. 
For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function (text) {
  let finObj = {}
  text.split("").map(el => finObj[el] ? finObj[el] += 1 : finObj[el] = 1);
  return Object.entries(finObj);
}

console.log(orderedCount("abracadabra")); //  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
console.log(orderedCount("233312")); //  [['2', 2], ['3', 3], ['1', 1 ]]



const orderedCount = (text) => {
  const arr = [...new Set([...text])]
  return arr.map(el => [el, [...text].filter(e => e === el).length]);
}



const orderedCount = text =>
  [...new Set(text)].map(val => [val, text.split(val).length - 1])



var orderedCount = function (text) {
  letters = text.split("")
  var uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)
  
  return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}
