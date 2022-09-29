// ASCII Total

/*
You'll be given a string, and have to return the sum of all characters as an int. 
The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

function uniTotal(string) {
  return string.split("").reduce((prev, cur) => prev + cur.charCodeAt(), 0);
}

console.log(uniTotal("a")); // 97
console.log(uniTotal("aaa")); // 291
