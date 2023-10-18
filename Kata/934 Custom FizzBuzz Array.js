// Custom FizzBuzz Array

/*
Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

The function should be able to take up to 4 arguments:

The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
The 3rd and 4th arguments are integers, 3 and 5 by default.

Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

[ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]

When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]

Examples

fizzBuzzCustom()[15]                         // returns 16
fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
fizzBuzzCustom('Hey', 'There')[25]         // returns 26
fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)

*/

var fizzBuzzCustom = function (stringOne, stringTwo, numOne, numTwo) {
  let finArr = [];
  stringOne = arguments[0] == undefined ? "Fizz" : arguments[0];
  stringTwo = arguments[1] == undefined ? "Buzz" : arguments[1];
  numOne = arguments[2] == undefined ? 3 : arguments[2];
  numTwo = arguments[3] == undefined ? 5 : arguments[3];

  for (let i = 1; i < 101; i++) {
    i % numOne == 0 && i % numTwo == 0
      ? finArr.push(stringOne + stringTwo)
      : i % numOne == 0
      ? finArr.push(stringOne)
      : i % numTwo == 0
      ? finArr.push(stringTwo)
      : finArr.push(i);
  }
  
  return finArr;
};

console.log(fizzBuzzCustom()); //
console.log(fizzBuzzCustom("Hey", "lol")); //




var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
	stringOne = stringOne || 'Fizz';
  stringTwo = stringTwo || 'Buzz';
  numOne = numOne || 3;
  numTwo = numTwo || 5;
  
  var ret = []
  for (var i = 1; i <= 100; ++i) {
  	if (i % numOne === 0 && i % numTwo === 0) {
    	ret.push(stringOne + stringTwo);
    } else if (i % numOne === 0) {
    	ret.push(stringOne);
    } else if (i % numTwo === 0) {
    	ret.push(stringTwo);
    } else {
    	ret.push(i);
    }
  }
  return ret;
};



const fizzBuzzCustom = (fizz='Fizz', buzz='Buzz', num1=3, num2=5) => {
  return Array.from(new Array(100), (nums, i) => i + 1).map((num) => {
    if (!(num % (num1 * num2))) return fizz + buzz;
    else if (!(num % num1)) return fizz;
    else if (!(num % num2)) return buzz;
    else return num;
  })
}



var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
  var arr = [];
  this.checker = function(x){
      if(x % (numOne || 3 ) === 0 && x % (numTwo || 5) === 0) {
          return (stringOne || 'Fizz') + (stringTwo || 'Buzz')
      }
      if(x % (numOne || 3) === 0) {
          return stringOne || 'Fizz'
      }
      if(x % (numTwo || 5) === 0){
          return stringTwo || 'Buzz'
      }
      return x
  }
  for(i=1;i<100;i++){
    arr.push(this.checker(i));
  }
  return arr
};



var fizzBuzzCustom = function (stringOne, stringTwo, numOne, numTwo)
{
	return new Array(100).join().split(',').map(function (a, i)
	{
		return ('' + (((i + 1) % (numOne || 3)) ? '' : (stringOne || 'Fizz')) + (((i + 1) % (numTwo || 5)) ? '' : (stringTwo || 'Buzz'))) || (i + 1);
	})
};



const fizzBuzzCustom = (stringOne = `Fizz`, stringTwo = `Buzz`, numOne = 3, numTwo = 5) =>
  [...Array(100)].map((_, idx) => !(++idx % (numOne * numTwo)) ? stringOne + stringTwo : !(idx % numOne) ? stringOne : !(idx % numTwo) ? stringTwo : idx);
