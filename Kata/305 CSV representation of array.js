// CSV representation of array

/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
*/

function toCsvText(array) {
  return array.join("\n")
}


console.log(toCsvText([
  [ 0, 1, 2, 3, 45 ],
  [ 10,11,12,13,14 ],
  [ 20,21,22,23,24 ],
  [ 30,31,32,33,34 ]
 ] ))  // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'

 console.log(toCsvText([
  [ -25, 21, 2, -33, 48 ],
  [ 30,31,-32,33,-34 ]
 ] ))  // '-25,21,2,-33,48\n30,31,-32,33,-34'
