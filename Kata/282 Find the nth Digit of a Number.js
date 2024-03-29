// Find the nth Digit of a Number

/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num 
(counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1
*/

var findDigit = function(num, nth){   
  if (nth <= 0) {return -1};
  let answer = ((Math.abs(num))+'').split('').reverse()[nth - 1];
  return answer === undefined ? 0 : +answer;
}

console.log(findDigit(5673, 4)) // 5
console.log(findDigit(129, 2)) // 2
console.log(findDigit(-2825, 3)) // 8
console.log(findDigit(-456, 4)) // 0
console.log(findDigit(0, 20)) // 0
console.log(findDigit(65, 0)) // -1




const findDigit = (num, nth) =>
  nth > 0 ? +[...`${num}`].reverse()[--nth] || 0 : -1;


var findDigit = function(num, nth) {
  return --nth < 0?-1:+(''+Math.abs(num)).split('').reverse()[nth] || 0;
};


var findDigit = function(num, nth){
    if ( nth <= 0 ) return -1;
    let arr = Math.abs(num).toString().split("");
    if ( nth > arr.length ) return 0;
    return Number(arr[arr.length - nth])
}



var findDigit = function(num, nth){
    if (nth < 1) return -1;
    if (num < 0) return findDigit(-num, nth);
    if (num == 0) return 0;
    if (nth > 1) return findDigit(Math.floor(num/10), nth - 1);
    return num % 10;
}

