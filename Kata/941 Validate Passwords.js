// Validate Passwords

/*
Oh no!
We made a log in system on Codewars but people have been putting random passwords to log in!

Your goal for this kata:
You must make sure all the passwords are valid, there will be two functions: signIn() and logIn(). 
signIn() will make a new password. logIn() will make sure that the password given is valid.

Example:
// Let us say that someone signed in to codewars and their password is "cracker".
// NOTE: The password will ONLY be a string.

signIn("cracker");

// Now when that someone does logIn("cracker") it should return true.
logIn("cracker");

var logIn = function() {
  // code
  return true;
}

// But if that someone does another password it should return false.
logIn("goat");

var logIn = function() {
  // code
  return false;
}

Have fun!
*/

const passwordArr = [];

var signIn = function (newPassword) {
  passwordArr.push(newPassword);
};

var logIn = function (password) {
  return passwordArr.some(el => el == password);
};

var bob = signIn("Mr. me");
var mary = signIn("Bubblehead123");

console.log(logIn("Mr. me")); // true
console.log(logIn("Bubblehead123")); // true
console.log(logIn("This isn't a password")); // false




const passwords = new Set()

function signIn(password) {
  passwords.add(password)
}

function logIn(password) {
  return passwords.has(password)
}



const passwords = [];

var signIn = function(newPassword) {
  passwords.push(newPassword);
};
var logIn = function(password) {
  return passwords.includes(password);
};




const passwords = []
var signIn = function(newPassword) {
  return passwords.push(newPassword);
};
var logIn = function(password) {
  return !!passwords.find(v=>v===password)
};




var signIn = function(newPassword) {
  log.add(newPassword);
};
var logIn = function(password) {
  return log.has(password) ? true : false; 
};

var log = new Set();




var storage = [];
var signIn = function(newPassword) {
  storage.push(newPassword);
};
var logIn = function(password) {
	for (var i = 0; i < storage.length; i++) {
		if(storage[i] == password) {
			return true;
		}
	}
	return false;
};
