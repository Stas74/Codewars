// Basic JS - Calculating averages

/*
Let's build a calculator that can calculate the average for an arbitrary number of arguments.

The test expects you to provide a Calculator object with an average method:

Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

It expects Calculator.average(3,4,5) to return 4.
*/

var Calculator = {
  average: function () {
    return Array.from(arguments).length == 0
      ? 0
      : Array.from(arguments).reduce((prev, cur) => prev + cur, 0) /
          Array.from(arguments).length;
  },
};

console.log(Calculator.average(3, 4, 5)); // 4
console.log(Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3)); // 5.769230769230769



var Calculator = {
 average: function() {
   
  return Array.prototype.slice.call(arguments).reduce(function(prev, next) {
    return prev + next;
  }, 0) / (arguments.length || 1);
 }
};



var Calculator = {
 average: function(...args) {
    return args.length==0?0:args.reduce((a,b)=>b+a)/args.length
 }
};



var Calculator = {
 average: function() {
   var average = 0;
   for (var i = 0; i < arguments.length; i++) {
     average += arguments[i];
   }
   average = average / Math.max(arguments.length, 1);
   return average;
 }
};


var Calculator = {
 average: (...$) => $.reduce((a, b) => a + b, 0) / $.length || 0
};



Calculator.average = (...args) => 
  args.reduce((pre, val) => pre + val, 0) / (args.length || 1);
