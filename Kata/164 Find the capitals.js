// Find the capitals

/*
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes 
of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
	let finArr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      finArr.push(i)
    }  
  }
  return finArr;
};

console.log(capitals('CodEWaRs')) // [0,3,4,6]




var capitals = function (word) {
  return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};



var capitals = function (word) {
  return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};



var capitals = function (word) {
  return word.split('').reduce(function(n, l, i){
    return /[A-Z]/.test(l) && n.push(i), n;
  }, []);
};
