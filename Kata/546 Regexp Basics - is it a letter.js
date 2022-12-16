// Regexp Basics - is it a letter?

/*
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

String.prototype.isLetter = function () {
  return this.length > 1 ? false : /[a-zA-Z]/.test(this);
};

console.log("".isLetter()); // false
console.log("a".isLetter()); // true
console.log("S".isLetter()); // true
console.log("7".isLetter()); // false
console.log("av".isLetter()); // false



String.prototype.isLetter = function() {
  return /^[a-z]$/i.test(this);
};



String.prototype.isLetter = function() {
  return /^[A-Za-z]$/.test(this)
}
