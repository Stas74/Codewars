// Filter unused digits

/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

function unusedDigits() {
  let fin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arg = Array.from(arguments).join("");
  return fin.filter(el => !arg.includes(el)).join("")
}

console.log(unusedDigits(12, 34, 56, 78)); // "09"
console.log(unusedDigits(2015, 8, 26)); // "3479"



function unusedDigits(...args){
  return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
}


const unusedDigits = (...arr) => {
	var digits = arr.join();
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		.filter(x => !digits.includes(x))
		.join('');
};



function unusedDigits(...args) {
  // Given: varying # of integer arguments
  // define the parameter
  // create a variable   
  
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // change the arguments from integer into a string   
  //join 
  let numStr = args.join('');  
  
  // filter out those that are not present in any of the arguments
  // Return: a sorted string of digits
  return numbers.filter(element => !numStr.includes(element)).join('')
}



unusedDigits=(...a)=>'0123456789'.replace(new RegExp('['+a+']','g'),'')
