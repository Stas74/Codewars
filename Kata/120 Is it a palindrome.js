// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome("a")); //  true
console.log(isPalindrome("Aba")); //  true

console.log(isPalindrome("hello")); //  false
