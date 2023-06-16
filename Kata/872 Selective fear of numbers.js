// Selective fear of numbers

/*
I've got a crazy mental illness. I dislike numbers a lot. 
But it's a little complicated: The number I'm afraid of depends on which day of the week it is... 
This is a concrete description of my mental illness:

Monday --> 12
Tuesday --> numbers greater than 95
Wednesday --> 34
Thursday --> 0
Friday --> numbers divisible by 2
Saturday --> 56
Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) 
so it tells the doctor if I'm afraid or not. (return a boolean)
*/

var AmIAfraid = function(day, num){
  return day == "Monday" ? num == 12 : day == "Tuesday" ? num > 95 : day == "Wednesday" ? num == 34 : 
  day == "Thursday" ? num == 0 : day == "Friday" ? num % 2 == 0 : day == "Saturday" ? num == 56 : Math.abs(num) == 666;
}

console.log(AmIAfraid("Monday", 13)); // false
console.log(AmIAfraid("Sunday", -666)); // true
console.log(AmIAfraid("Tuesday", 2)); // false
console.log(AmIAfraid("Tuesday", 956)); // true
console.log(AmIAfraid("Friday", 2)); // true



var AmIAfraid = function(day, num) {
  var preds = {"Sunday":    d => d == 666 || d == -666,
               "Monday":    d => d == 12,
               "Tuesday":   d => d > 95,
               "Wednesday": d => d == 34,
               "Thursday":  d => d === 0,
               "Friday":    d => d % 2 === 0,
               "Saturday":  d => d == 56};
  return preds[day](num);
}



function AmIAfraid(day, num) {
  return {
    "Monday"   : num === 12,
    "Tuesday"  : num > 95,
    "Wednesday": num === 34,
    "Thursday" : num === 0,
    "Friday"   : num % 2 === 0,
    "Saturday" : num === 56,
    "Sunday"   : Math.abs(num) === 666
  }[day];
}



function AmIAfraid(day, num) {
  switch (day) {
    case "Monday":    return num == 12
    case "Tuesday":   return num > 95
    case "Wednesday": return num == 34
    case "Thursday":  return num == 0
    case "Friday":    return num % 2 == 0
    case "Saturday":  return num == 56
    case "Sunday":    return num == 666 || num == -666
  }
  
  return false
}



var AmIAfraid = function(day, num){
    if ((day=="Monday" && num == 12)||(day=="Tuesday" && num > 95)
  ||(day=="Wednesday" && num == 34) || (day=="Thursday" && num == 0)
  ||(day=="Friday" && num%2 == 0) || (day=="Saturday" && num == 56)
  ||(day=="Sunday" && ((num == 666)||(num==-666) )))
  {
    return true
  } else{
    return false
  }
}
