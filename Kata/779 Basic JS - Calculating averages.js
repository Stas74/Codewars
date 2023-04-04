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
