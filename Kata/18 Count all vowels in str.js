// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  //   let vowels = /[aeiou]/gi;
  //   let result = str.match(vowels);
  //   return result.length; 
  // Error with empty array (null)
  
  return (str.match(/[aeiou]/gi) || []).length; 
}

console.log(getCount("abracadabra")); // 5
