// Password validator

/*

Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password.

Examples:
password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;

Extra info
You will only be passed strings.
The string can contain any standard keyboard character.
Accepted strings can be any length, as long as they are 8 characters or more.

*/

function password(str) {
  return str.length < 8
    ? false
    : str.replace(/[^a-z]/g, "") == 0
    ? false
    : str.replace(/[^A-Z]/g, "") == 0
    ? false
    : str.replace(/[^0-9]/g, "") == 0
    ? false
    : true;
}

console.log(password("Abcd1234")); // true
console.log(password("Abcd123")); // false
console.log(password("abcd1234")); // false
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")); // true
console.log(password("ABCD1234")); // false
console.log(password("Ab1!@#$%^&*()-_+={}[]|:;?/>.<,")); // true
console.log(password("!@#$%^&*()-_+={}[]|:;?/>.<,")); // false




function password(str) {
    return str.length >= 8 &&
           /[a-z]/.test(str) &&
           /[A-Z]/.test(str) &&
           /\d/.test(str);
}


const password = str => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str);



function password(str) {
  return /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(str);
}



function password(str) {
  return ['[A-Z]','[a-z]','\\d','.{8,}'].every(e => new RegExp(e).test(str));
}



function password(str) {
  return str.length >= 8 && /\d/.test(str) && /[a-z]/.test(str) && /[A-Z]/.test(str)
}
