// Help Bob count letters and digits.

/*
Bob is a lazy man.

He needs you to create a method that can determine how many letters 
(both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1
*/

function countLettersAndDigits(input) {
  return input.replace(/[^a-z0-9]/gi, "").length;
}

console.log(countLettersAndDigits("hel2!lo")); // 6
console.log(countLettersAndDigits("n!!_ice!!123")); // 7




function countLettersAndDigits(s) {
  return s.replace(/[^a-z\d]/gi,"").length;
}


const countLettersAndDigits = input =>
  input.replace(/[\W_]/g, ``).length;



function countLettersAndDigits(input) {
  return (input.match(/[a-z0-9]/gi) || []).length
}


