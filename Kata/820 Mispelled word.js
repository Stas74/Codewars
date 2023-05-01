// Mispelled word

/*

Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. 
If the two words are the same, return True.

*/


var mispelled = function (word1, word2) {
  if (word1.length < word2.length) {
    [word1, word2] = [word2, word1]
  }
  let count = 0;
  for (let i = 0, j = 0; i < word1.length; i++, j++) {
    if (word1[i] !== word2[j]) {
      count++;
      if (word1.length > word2.length) {
        i++;
      }
    }
  }
  return count < 2;
};


// var mispelled = function (word1, word2) {
//   if (Math.abs(word1.length - word2.length) > 1) {
//     return false;
//   }
//   return word1.replace(
//     [...word2].map((el) => el),
//     ""
//   );
// };

console.log(mispelled("versed", "xersed")); // true
console.log(mispelled("versed", "applb")); // false

console.log(mispelled("versed", "v5rsed")); // true
console.log(mispelled("1versed", "versed")); // true
console.log(mispelled("versed", "versed1")); // true

console.log(mispelled("versed", "aversed")); // true
console.log(mispelled("aaversed", "versed")); // false
console.log(mispelled("versed", "aaversed")); // false




function mispelled(word1, word2) {
  if(Math.abs(word1.length - word2.length) >= 2){
    return false;}
    
  if(Math.abs(word1.length - word2.length) == 1){
    return (word1.includes(word2) || word2.includes(word1)); }  
 
 let res = 0;
  for(let i = 0; i < word1.length; i++){  
    if(word1[i] !== word2[i]){res += 1;}  
  }
  if(res <= 1) { return true;} 
  else { return false;}  
}



var mispelled = function(word1, word2)
{
  console.log(`"${word1}", "${word2}"`)
  
  let i = 0, j = 0;
  let errorCount = 0;
  
  while (i< word1.length || j < word2.length) {
    if ( word1[i] !== word2[j] ) {
      ++errorCount;
      if (word1[i+1] === word2[j] && word2[j] !== word2[j+1]) {
        --j;
      } else if (word1[i] === word2[j+1] && word1[i] !== word1[i+1]) {
        --i;
      }
    }      
    ++i, ++j;
  }
  return errorCount === 1;  
}



const mispelled = function(a,b){
  let d = a.length-b.length;
  return !d ? [...a].reduce((s,c,i)=>s+(c==b[i]),0)==a.length-1
        : d==-1 ? b.includes(a) : d==1 && a.includes(b);
}



const mispelled = (word1, word2) =>
  (len => len === 1 ? word2.includes(word1) || word1.includes(word2) : !len ? [...word1].reduce((pre, val, idx) => pre + (word2[idx] !== val), 0) === 1 : false)
  (Math.abs(word1.length - word2.length));



const check = (wordMax,wordMin) => {
  return wordMax.length === wordMin.length + 1 && !!(wordMax.search(wordMin) + 1);
}
const mispelled = function(word1, word2){
  if(word1.length === word2.length) {
    return [...word1].filter((el,i) => el !== word2[i]).length === 1;
  }
  return word1.length > word2.length ? check(word1,word2) : check(word2,word1);
}
