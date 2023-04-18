// Ones' Complement

/*

The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. 
For example:

onesComplement(1001) = 0110
onesComplement(1001) = 0110
For any given binary number,formatted as a string, return the Ones' Complement of that number.

*/


function onesComplement(n) {
  return n.split("").map(el => el == 0 ? 1 : 0).join("");
};

console.log(onesComplement("0")); // "1"
console.log(onesComplement("1")); // "0"
console.log(onesComplement("01")); // "10"
console.log(onesComplement("1101")); // "0010"



function onesComplement(n) {
  return [...n].map(e => e === '1' ? '0' : '1').join('')
};


function onesComplement(n) {
  return [...n].map( b => b^1 ).join``
};


const onesComplement = (str) => str.replace(/\d/g, x=> x === '0' ? '1' : '0')


const onesComplement = n => n.replace(/./g, i => '10'[i])


const onesComplement = n =>
  n.replace(/./g, val => val ^ 1);



function onesComplement(n) {
  var result = ''
  for (let i of n){
    if(i == '1'){
      result += '0'
    }else{
      result += '1'
    }
  }
  return result
}
