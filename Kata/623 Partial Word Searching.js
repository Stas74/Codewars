// Partial Word Searching

/*
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. 
Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, 
the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

Examples
If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], 
the method should return ["home", "Mercury"].
*/

function wordSearch(query, seq){
  let finArr = seq.filter(el => el.toLowerCase().includes(query.toLowerCase()));
  return finArr.length === 0 ? ["Empty"] : finArr;
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])); // ["ab", "abc", "zab"]
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])); // ["aB", "Abc", "zAB"]
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])); // ["Empty"]



function wordSearch(query, seq){
  var reg = new RegExp(query,"i");
  var res = seq.filter(function(val){
    return reg.test(val);
  });
  return (res.length > 0) ? res : ["Empty"];
}



wordSearch = (q, a) => (a = a.filter(e => e.match(new RegExp(q,'i'))))[0] ? a : ["Empty"];


const wordSearch = (query, seq) =>
  (val => val.length ? val : [`Empty`])
  (seq.filter(val => new RegExp(query, `i`).test(val)));



function wordSearch(query, seq) {
  var res = seq.filter(w => w.toLowerCase().indexOf(query.toLowerCase()) >= 0)
  return res.length ? res : ["Empty"]
}
