// Decipher this!


/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/


function decipherThis(str) {
  return str.replace(/\d+/g, num => String.fromCharCode(num * 1)).split(" ").map(word => word.length > 2 ?
    word.slice(0, 1) + word.slice(-1) + word.slice(2,-1) + word.slice(1, 2) : word).join(" ")
}; 


// return str.split(" ").map(word => 
// String.fromCodePoint(word.match(/\d+/)) + word.replace(/\d+/, "").slice(-1) + word.replace(/\d+/, "").slice(1, -1) + word.replace(/\d+/, "").slice(0, 1)
// ).join(" ")

// let word = "72olle"
// console.log(String.fromCodePoint(word.match(/\d+/)))
// console.log(word.replace(/\d+/, ""))
// console.log(word.replace(/\d+/, "").slice(-1))
// console.log(word.replace(/\d+/, "").slice(0, 1))
// console.log(word.replace(/\d+/, "").slice(1, -1))
// console.log(String.fromCodePoint(word.match(/\d+/)) + word.replace(/\d+/, "").slice(-1) + word.replace(/\d+/, "").slice(1, -1) + word.replace(/\d+/, "").slice(0, 1))

// var r = /\d+/;
// var s = "you can enter maximum 500 choices";
// alert (s.match(r));

console.log(decipherThis('72olle 103doo 100ya'))  // 'Hello good day'
console.log(decipherThis("82yade 115te 103o"))  // 'Ready set go'




function decipherThis(str) {
  return str
    .split(" ")
    .map((w) =>
      w
        .replace(/^\d+/, (c) => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ");
}


const decipherThis = str =>
  str.replace(/\b(\d+)(\w?)(\w*?)(\w?)\b/g, (_, $1, $2, $3, $4) => String.fromCharCode($1) + $4 + $3 + $2);


