// If you can read this...

/*
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

const NATO = {
  a: "Alfa",
  n: "November",
  b: "Bravo",
  o: "Oscar",
  c: "Charlie",
  p: "Papa",
  d: "Delta",
  q: "Quebec",
  e: "Echo",
  r: "Romeo",
  f: "Foxtrot",
  s: "Sierra",
  g: "Golf",
  t: "Tango",
  h: "Hotel",
  u: "Uniform",
  i: "India",
  v: "Victor",
  j: "Juliett",
  w: "Whiskey",
  k: "Kilo",
  x: "Xray",
  l: "Lima",
  y: "Yankee",
  m: "Mike",
  z: "Zulu",
};

function to_nato(words) {
  const noSpaceStr = words.toLowerCase().split(" ").join("");
  const wordsArr = noSpaceStr.split("").map(el => NATO[el] == undefined ? el : NATO[el]);
  return wordsArr.join(" ");
}

console.log(to_nato('If you can read')); // "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
console.log(to_nato("go for it!")); // "Golf Oscar Foxtrot Oscar Romeo India Tango !"




function to_nato(words) {
  return words.split('').filter(c => c !== ' ').map(c => NATO[c.toUpperCase()] || c).join(' ');
}



function to_nato(words) {
  return words.replace(/\s/g, '').toLowerCase().split('').map(e => NATO[e] ? NATO[e] : e).join(' ');
}



function to_nato(words) {
	var translate = {a: "Alfa ", b: "Bravo ", c: "Charlie ", d: "Delta ", e: "Echo ", f: "Foxtrot ", g: "Golf ",
                  h: "Hotel ", i: "India ", j: "Juliett ", k: "Kilo ", l: "Lima ", m: "Mike ", n: "November ",
                  o: "Oscar ", p: "Papa ", q: "Quebec ", r: "Romeo ", s: "Sierra ", t: "Tango ", u: "Uniform ",
                  v: "Victor ", w: "Whiskey ", x: "Xray ", y: "Yankee ", z: "Zulu ",
                  "?": "? ", ".": ". ", " ": "", "!": "! "};

  return words.toLowerCase().split("").map(char => translate[char]).join("").trim();
}



const to_nato = words => words
  .toLowerCase()
  .replace(/\s+/g, '')
  .split('')
  .map(char => NATO.hasOwnProperty(char) ? NATO[char] : char)
  .join(' ');



function to_nato(words) {
  const solution = []

  for (const letter of [...words.toLowerCase()]) {
    if (letter !== ' ') {
      solution.push(NATO[letter] || letter)
    }
  }
  return solution.join(' ')
}



const to_nato = words =>
  (obj => words.toLowerCase().replace(/./g, val => obj[val] || ``).trim())
  ({a:`Alfa `, b:`Bravo `, c:`Charlie `, d:`Delta `, e:`Echo `, f:`Foxtrot `, g:`Golf `, h:`Hotel `, i:`India `,
    j:`Juliett `, k:`Kilo `, l:`Lima `, m:`Mike `, n:`November `, o:`Oscar `, p:`Papa `, q:`Quebec `, r:`Romeo `,
    s:`Sierra `, t:`Tango `, u:`Uniform `, v:`Victor `, w:`Whiskey `, x:`Xray `, y:`Yankee `, z:`Zulu `,
    '.': `. `, '!':`! `, '?':`? `});

