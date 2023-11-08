// Russian postal code checker

/*
You should write a simple function that takes string as input and checks if it is a valid Russian postal code, 
returning true or false.

A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.

Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9

Examples

Valid postcodes:

198328
310003
424000

Invalid postcodes:

056879
12A483
1@63
111
*/

function zipvalidate(postcode) {
  if (postcode.length != 6 || /[05789]/.test(postcode[0])) {
    return false;
  }
  return postcode.replace(/[^\d]/gi, "").length == 6;
}

console.log(zipvalidate("198328")); // true
console.log(zipvalidate("310003")); // true
console.log(zipvalidate("12A483")); // false
console.log(zipvalidate("056879")); // false



function zipvalidate(postcode){
  return /^[12346]\d{5}$/.test(postcode)
}//z.



function zipvalidate(postcode) {
  return /^[1-46]\d{5}$/.test(postcode);
}



var zipvalidate = RegExp.prototype.test.bind(/^[12346]\d{5}$/);



function zipvalidate(postcode){
  if (parseInt(postcode).toString() !== postcode || postcode < 100000 || postcode >= 700000 || (postcode < 600000 && postcode >= 500000)) return false;
  return true;
}


