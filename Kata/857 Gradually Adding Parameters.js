// Gradually Adding Parameters

/*

This kata is all about adding numbers.

You will create a function named add. This function will return the sum of all the arguments. 
Sounds easy, doesn't it??

Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

  add(3,4,5); 

  returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26

  Remember the function will return 0 if no arguments are passed.

  Example

    add(); //=> 0
    add(1,2,3); //=> 14
    add(1,4,-5,5); //=> 14

*/

function add() {
  return [...arguments].reduce((prev, cur, i) => prev + cur * (i + 1), 0);
}

console.log(add(100, 200, 300)); // 1400



function add() {
  for (var n = 0, i = 0; i < arguments.length; i++) {
    n += arguments[i] * (i + 1)
  }  
  return n
}



const add = (...args) => args.reduce((s, v, i) => s + v * (i + 1), 0);



function add() {
  return [].reduce.call(arguments, function(sum,v,i) { return sum + v * (i+1); }, 0);
}



const add = (...args) =>
  args.reduce((pre, val, idx) => pre + val * ++idx, 0);



function add (...num) {
  let sum = 0;
  for (let i = 0; i <num.length; i++) {
    sum += num[i]*(i+1);
  }
  return sum;
}
