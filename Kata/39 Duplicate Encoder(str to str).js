// The goal of this exercise is to convert a string to a new string where each character in the new string
// is "(" if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let obj = {};
  let char = word.toLowerCase().split("");
  for (let i = 0; i < char.length; i++) {
    let elem = char[i];
    if (obj[elem] === undefined) {
      obj[elem] = 1;
    } else {
      obj[elem] += 1;
    }
  }
  return char.map(function (char) {
    return obj[char] === 1 ? "(" : ")";
  }).join('');
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"

// -------------------------------------------


function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}


function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}


function duplicateEncode(word) {
  var letters = word.toLowerCase().split('')
  return letters.map(function(c, i) {
    return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
  }).join('')
}



function countCharacters(chars) {
  return chars
    .reduce( function(memo, char){
      memo[char] = memo[char] ? memo[char] + 1 : 1;
      return memo;
    }, {});
}

function duplicateEncode(word){
  const chars = word.split('').map(ch => ch.toLowerCase());
  const charsCount = countCharacters(chars);
  return chars
    .map( ch => charsCount[ch] > 1 ? ')' : '(' )
    .join('');
}
