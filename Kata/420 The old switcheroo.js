// The old switcheroo

/*
Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/

function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (_, offset) => offset + 1)
}

// The .replace function accepts an offset parameter that contains the index of the current match, 
// so you can just use the replacer function, and return that offset plus one. 
// No need for an array of vowels, just use the character set of vowels in the pattern:

console.log(vowel2index('this is my string')); // 'th3s 6s my str15ng'
console.log(vowel2index('Codewars is the best site in the world')); // 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'




const vowel2index = ($tr) => [...$tr].map((el, i)=> el.match(/[aeiou]/i) ? i+1 : el).join('')


var vowel2index = str => str.split('').map((c, i) => 'aeiouAEIOU'.indexOf(c) != -1 ? i + 1 : c).join('');



function vowel2index(str) {
   var arr = str.split(''),
       i = 0,
       len = arr.length,
       vowels = ['a','e','i','o','u'];
   
   for (i=0; i<len; i++) {
     if ( vowels.indexOf(arr[i].toLowerCase()) > -1 ) arr[i] = i+1;
   }
   
   return arr.join('');
}


