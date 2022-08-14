// Two to One

// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters -
// each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  return (s1 + s2)
    .split("")
    .filter((element, index) => {
      return (s1 + s2).split("").indexOf(element) === index;
    })
    .sort()
    .join("");
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"




const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");


function longest(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}
