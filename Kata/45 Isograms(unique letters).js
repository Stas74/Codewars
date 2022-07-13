// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  let flag = true;
  str.toLowerCase().split('').map(function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? true : flag = false;
  })
  return flag;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false

// -------------------------------------------------


function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}


function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}


function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}


function isIsogram(str)  {
  // Downcase everything, split on letters.
  str_lc = str.toLowerCase();
  var letters = str_lc.split('');
  
  // Utility: checks whether the given "value" at "index" is actually
  // first encountered at this "index" position within a string ("self").
  // Expected to be used with Array#filter.
  var check4uniqueness = function(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  // An isogram string contains no duplicate, hence must have the same
  // length than the array composed of unique letters from that string.
  return letters.filter(check4uniqueness).length == str.length;
}
