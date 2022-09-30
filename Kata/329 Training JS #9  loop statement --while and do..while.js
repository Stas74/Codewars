// Training JS #9: loop statement --while and do..while

/*
We can use a loop statement do it:

function sum1_100(){
  var sum=0,num=1;    //Initialize two variables sum and num
  while (num<=100){   //Determine the expression in brackets, while true, 
                      //run the code block one time, while false, break the loop
    sum=sum+num;      //Each time num will be added to the current value of sum
                      //It can be simplified as:  sum+=num
    num=num+1;        //Each time the value of num increases by 1
                      //It can be simplified as:  num++
  }
  return sum;         //return the final cumulative value
}
The do..while is a variant of while. The example above can be written like this:

function sum1_100(){
  var sum=0,num=1;
  do{
    sum+=num;
    num++;
  }while (num<=100)
  return sum;
}
The difference is, while judges the condition before perform code execution, do..while judges the condition after code run one time.

Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), 
otherwise it will turn into an infinite loop.

Ok, lesson is over. Let us do some task with while.

Task

Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.

Behaviour

You need to write a loop statement within the function that loops n times. 
Each time through the loop it will add one * to str, alternating on which side it is padded: 
the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/

function padIt(str, n) {
  let finArr = [str];
  do {
    n % 2 !== 0 ? finArr.unshift("*") : finArr.push("*");
    n--;
  } while (n > 0);
  return finArr.join("");
}


console.log(padIt("a",1))  // "*a"
console.log(padIt("a",3))  // "**a*"
console.log(padIt("a",5))  // "***a**"
