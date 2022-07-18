// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything 
// but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
  //return true or false
  return /^(\d{4}|\d{6})$/.test(pin);
}
console.log(validatePIN("1")); // false
console.log(validatePIN("-1.234")); // false
console.log(validatePIN("a234")); // false
console.log(validatePIN("098765")); // true
