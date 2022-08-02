// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome("a")); //  true
console.log(isPalindrome("Aba")); //  true

console.log(isPalindrome("hello")); //  false





function isPalindrome(x) {
  x = x.toLowerCase()
  let a = 0
  let b = x.length
  while (a < b) {
    if (x[a] != x[b-1])
      return false
    a++
    b--
  }
  return true
}




function isPalindrome(x, str = x.toLowerCase()) {
  return str === [...str].reverse().join('')
} 
