// Calculating with Functions

/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function makeNum(num, func) {
  if (func === undefined) {
		return num;
	} else {
		return func(num);
	}
}

function zero(func) {
	return makeNum(0,func);
}
function one(func) {
	return makeNum(1,func);
}
function two(func) {
	return makeNum(2,func);
}
function three(func) {
	return makeNum(3,func);
}
function four(func) {
	return makeNum(4,func);
}
function five(func) {
	return makeNum(5,func);
}
function six(func) {
	return makeNum(6,func);
}
function seven(func) {
	return makeNum(7,func);
}
function eight(func) {
	return makeNum(8,func);
}
function nine(func) {
	return makeNum(9,func);
}

function plus(right) {
  return function(left) { return left + right; };
}
function minus(right) {
  return function(left) {
		return left - right;
	};
}
function times(right) {
  return function(left) { return left * right; };
}
function dividedBy(right) {
  return function(left) { return left / right; };
}

// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };

// function plus( b )      { return function( a ) { return a + b; }; };
// function minus( b )     { return function( a ) { return a - b; }; };
// function times( b )     { return function( a ) { return a * b; }; };
// function dividedBy( b ) { return function( a ) { return a / b; }; };  // floor ???   
// function dividedBy( b ) { return function( a ) { return Math.floor(a / b); }; };

console.log(seven(times(five()))) // 35
console.log(four(plus(nine()))) // 13






var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }



const
  id = x => x,
  number = x => (f = id) => f(x),
  [zero, one, two, three, four, five, six, seven, eight, nine] =
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number),
  plus = x => y => y + x,
  minus = x => y => y - x,
  times = x => y => y * x,
  dividedBy = x => y => y / x;
