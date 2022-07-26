// Ones and Zeros

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

console.log(binaryArrayToNumber([0,0,0,1]));  // 1
console.log(binaryArrayToNumber([0,0,1,0]));  // 2
console.log(binaryArrayToNumber([1,1,1,1]));  // 15




function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}


const binaryArrayToNumber = arr => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}



const binaryArrayToNumber = arr => {
  // your code
  //array recieved as argument
  //reverse array to begin at first digit
  //loop through array
  //first digit signifies number of 1s| second signifies 2s| 3rd signifies 4s| 4th signifies 8s|
  //add numbers to variable | return variable
  
  arr.reverse();
  var count = 0;
  
  for(var i = 0; i < arr.length; i++){
      if(arr[i] === 1){
        count += Math.pow(2,i);
      }  
  }
    
    return count;  
};
