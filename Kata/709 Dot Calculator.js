//  Dot Calculator

/*
You have to write a calculator that receives strings for input. 
The dots will represent the number in the equation. 
There will be dots on one side, an operator, and dots again after the operator. 
The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. 
If the result is 0, return the empty string. 
When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

function dotCalculator(equation) {
  const arr = equation.split(" ");
  const total = Math.floor(
    eval(`${arr[0].length} ${arr[1] == "//" ? "/" : arr[1]} ${arr[2].length}`)
  );
  return ".".repeat(total);
}

console.log(dotCalculator("..... + ...............")); // "...................."
console.log(dotCalculator("..... - ...")); // ".."
console.log(dotCalculator("..... * ...")); // "..............."
console.log(dotCalculator("..... // ..")); // ".."



const dotCalculator = (equation) => {
  const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(' ');
  return '.'.repeat(operations[operator](left.length, right.length));
}



function dotCalculator (equation) {
	equation = equation.split(' ');
	
	let [a, operator, b] = equation;
	
	switch (operator) {
	  case '+':
	    equation = a.length + b.length;
	    break;
	  case '-':
	    equation = a.length - b.length;
	    break;
	  case '*':
	    equation = a.length * b.length;
	    break;
	  case '//':
	    equation = Math.trunc(a.length / b.length);
	    break;
	}
	a = [];
	for (let i = equation; i > 0; i--) {
	  a.push('.');
	}
	
	return a.join('');
}


function dotCalculator (equation) {  
  let [ a, op, b ] = equation.split(' ');  
  return '.'.repeat(eval(a.length + op[0] + b.length));  
}


function dotCalculator(s){
  return '.'.repeat(eval(s.replace(/\.+/g,e=>e.length).replace(/\//,''))|0)
}
