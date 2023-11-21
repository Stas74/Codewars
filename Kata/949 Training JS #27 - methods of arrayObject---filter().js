// Training JS #27: methods of arrayObject---filter()

/*
This lesson we learn a very useful method of array: filter(). 
The filter() method creates a new array with all elements that pass the test implemented by the provided function. 
For more information, please refer to: Array.prototype.filter()

Here are some examples to help us understand the use of filter():

filter() always accept a function as parameter, the function always return boolean value true or false. 
filter() returns a new array that contains only the elements that meet the conditions
(The elements as a parameters of the function, return true value).

var a=[1,2,3,4,5];
var b=a.filter(function(x){return x<3});
console.log(b);   //output: [ 1, 2 ]

The above example can be simplified:

var a=[1,2,3,4,5];
var b=a.filter(x=>x<3);
console.log(b);   //output: [ 1, 2 ]

If the function return value is not a Boolean value, it will be automatically converted:

var a=[1,2,3,4,5];
var b=a.filter(x=>x%2);
console.log(b);   //output: [ 1, 3, 5 ]

The above example x%2 returns a value of 1 or 0, which will automatically be converted to true(1) or false(0).

In many cases, the parameters of the filter() are conditional expressions that are connected by the logical operator(&&,||).

var a=[3,6,9,12,24,36]
var b=a.filter(x=>x%2==0&&x%3==0&&x%4==0)
console.log(b)   //output: [ 12, 24, 36 ]

The example above filter is the number which can be divisible by 2,3,4.

If the function does not return a conditional statement directly, it is made up of a number of statements, 
then the curly braces must be added.

var a=["","a","ab","aba","abab","ababa"]
var b=a.filter(x=>{
  if (x.length<2) return true;
  var y=x.split("").reverse().join("");
  return x==y;
})
console.log(b)   //output: [ '', 'a', 'aba', 'ababa' ]

The example above retained elements which is the palindrome string.

Filter is often used to count the number of elements in an array:

function count(arr,n){
  return arr.filter(x=>x==n).length;
}
var a=[1,1,1,2,2,3,4,4];
console.log(count(a,1))   //output: 3
console.log(count(a,2))   //output: 2

The last to say is that filter() will be very slow when dealing with large data, 
if you need to optimize the performance of the code, please consider other methods.

Ok, lesson is over. let's us do some task.

Task
Coding in function countGrade. function accept 1 parameters scores, it's a number array. 
Your task is to count the grade distribution of the scores, to return an object like this:

{S:888, A:888, B:888, C:888, D:888, X:888}

Grading rules:

Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)

Example

countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}

*/

function countGrade(scores) {
  let s = scores.filter((e) => e == 100).length;
  let a = scores.filter((e) => e < 100 && e >= 90).length;
  let b = scores.filter((e) => e < 90 && e >= 80).length;
  let c = scores.filter((e) => e < 80 && e >= 60).length;
  let d = scores.filter((e) => e < 60 && e >= 0).length;
  let x = scores.filter((e) => e == -1).length;
  return { S: s, A: a, B: b, C: c, D: d, X: x };
}

console.log(countGrade([50, 60, 70, 80, 90, 100])); //  {S:1, A:1, B:1, C:2, D:1, X:0}
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100])); //  {S:2, A:1, B:2, C:2, D:0, X:0}
console.log(countGrade([-1, -1, -1, -1, -1, -1])); //  {S:0, A:0, B:0, C:0, D:0, X:6}




function countGrade(scores){
  return {
    'S': scores.filter(function(x){return x == 100}).length,
    'A': scores.filter(function(x){return (x < 100 && x >= 90)}).length,
    'B': scores.filter(function(x){return (x < 90 && x >= 80)}).length,
    'C': scores.filter(function(x){return (x < 80 && x >= 60)}).length,
    'D': scores.filter(function(x){return (x < 60 && x >= 0)}).length,
    'X': scores.filter(function(x){return x == -1}).length,
  };
}



countGrade = scores => ({
    S: scores.filter(x => x >= 100).length,
    A: scores.filter(x => x >=  90).filter(x => x < 100).length,
    B: scores.filter(x => x >=  80).filter(x => x <  90).length,
    C: scores.filter(x => x >=  60).filter(x => x <  80).length,
    D: scores.filter(x => x >=   0).filter(x => x <  60).length,
    X: scores.filter(x => x ==  -1).length
  })



function countGrade(arr){
  get = (a,b) => arr.filter(i => i >= a && i < b).length
  return {S:get(100,101), A:get(90,100), B:get(80,90), C:get(60,80), D:get(0,60), X:get(-1,0)} 
}



function countGrade(scores) {
  const score = x => x >= 0 ? 'DDDDDDCCBAS'[~~(x / 10)] : 'X'
  return scores.reduce((grades, s) => (grades[score(s)] += 1, grades), { S:0, A:0, B:0, C:0, D:0, X:0 })
}



const countGrade = scores =>
  (fn => ({S: fn(100), A: fn(90, 100), B: fn(80, 90), C: fn(60, 80), D: fn(0, 60), X: fn(-1)}))
  ((min, max = min + 1) => scores.filter(val => val >= min && val < max).length);



function grade(marks) {
  if (marks == 100) return "S";
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 60) return "C";
  if (marks >= 0) return "D";
  return "X";
}

function countGrade(scores){
  let result = {S: 0, A: 0, B: 0, C: 0, D: 0, X: 0};
  scores.forEach(score => result[grade(score)] += 1);
  return result;
}



