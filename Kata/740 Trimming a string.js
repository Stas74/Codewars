// Trimming a string

/*
Create a function that will trim a string (the first argument given) 
if it is longer than the requested maximum string length (the second argument given). 
The result should also end with "..."

These dots at the end also add to the string length.

For example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller or equal than the maximum string length, 
then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

If the requested string length is smaller than or equal to 3 characters, 
then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H...", because 1 <= 3

Requested maximum length will be greater than 0. Input string will not be empty.
*/

function trim(str, size) {
  return str.length <= size
    ? str
    : str.length <= 3 || size <= 3
    ? str.slice(0, size) + "..."
    : str.slice(0, size - 3) + "...";
}

console.log(trim("Creating kata is fun", 14)); // "Creating ka..."
console.log(trim("Creating kata is fun", 2)); // "'Cr..."
console.log(trim("He", 1)); // "H..."
console.log(trim("Code Wars is pretty rad", 50)); // "Code Wars is pretty rad"



function trim ( str, size ) {
  if ( str.length <= size ) {
    return str;
  }  
  const real = str.slice(0, size);  
  return `${real.length < 4 ? real : real.slice(0, -3)}...`;
}



const trim = (str, size) => {
  if(str.length <= size) return str
  if(size <= 3)return str.slice(0,size) + '...'
  if(size > 3) return str.slice(0,size-3)+'...' 
}



function trim(arr, size) {
  if(arr.length <= size) return arr;
  if(size > 3) size -= 3;
  return arr.substr(0, size) + "...";
}



