// Consonant value

/*
Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and 
"ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

function solve(s) {
  // let arr = s.replace(/[aeiou]/gi, " ").split(" ")
  sumArr = []
  s.replace(/[aeiou]/gi, " ").split(" ").forEach(element => {
    let counter = 0
    for (let char of element) {
      counter += char.charCodeAt(0) - 96
    }
    sumArr.push(counter)
  });  
  return Math.max(...sumArr)
};


console.log(solve("zodiac"))  // 26
console.log(solve("chruschtschov"))  // 80
console.log(solve("strength"))  // 57




const solve = s => s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);


function solve(s) {
  return Math.max(...s.match(/[^aeiou]+/g).map(x => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0)))
}
