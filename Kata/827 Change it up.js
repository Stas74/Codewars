// Change it up

/*

Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

 -- the alphabet should wrap around, so Z becomes A
 -- in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

*/

function changer(str) {
  let lowerArr = str
    .split("")
    .map((el) => (el == el.toUpperCase() ? el.toLowerCase() : el));
  let indexArr = lowerArr.map((el) =>
    el.codePointAt() < 97 || el.codePointAt() > 122
      ? el.codePointAt()
      : el.codePointAt() == 122
      ? 97
      : el.codePointAt() + 1
  );
  return indexArr
    .map((el) => String.fromCharCode(el))
    .join("")
    .replace(/[aeiou]/g, (el) => el.toUpperCase());
}

console.log(changer("Cat30")); // 'dbU30'




const changer = str =>
  str
    .toLowerCase()
    .replace(/[a-z]/g, m => String.fromCharCode((m.charCodeAt(0) - 96) % 26 + 97)) 
    .replace(/[aeiou]/g, m => m.toUpperCase())



const letters = "abcdEefghIijklmnOopqrstUuvwxyzA";
const changer = s => s.replace( /[a-z]/gi, c => letters[ letters.indexOf(c.toLowerCase())+1 ] );


function changer(str) { 
  var a='AbcdEfghIjklmnOpqrstUvwxyz';
  var s='zabcdefghijklmnopqrstuvwxy';
  var ans='';
  str=str.toLowerCase();
  for (var i=0; i<str.length; ++i)
    if (str[i]>='a' && str[i]<='z')
      ans+=a[s.indexOf(str[i])];
    else
      ans+=str[i];
  return ans;
}



changer=a=>a.toLowerCase().replace(/[a-z]/g,a=>a<'z'?String.fromCharCode(a.charCodeAt()+1):'a').replace(/[aeioue]/g,a=>a.toUpperCase())




