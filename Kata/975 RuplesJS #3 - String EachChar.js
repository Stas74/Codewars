// RuplesJS #3: String EachChar

/*
Your team is really excited with all the contributions you've made to the RuplesJS library. 
They feel the work you're doing will truly help Ruby developers transition to Javascript! 
They've assigned you another task.

String.eachChar()
In ruby you can add something after each character in a string like so:

"hello".each_char {|c| print c, ' ' } -> "h e l l o " 
In the spirit of polymorphism, our eachChar method will allow one of two arguments, a callback function or a string. 
If a string is presented, it will be added after each character of the original string and return the new string. 
If a function is presented, it will perform a manipulation of each character in the string.

Example:

"hello".eachChar(" ");
-> "h e l l o "

"hello all".eachChar(function(char) {
  if (char == "l") {
    return char.toUpperCase();
  } else {
    return char;
  }
});
-> "heLLo aLL"
*/

String.prototype.eachChar = function (n) {
  return this.split("").map(el => typeof n == "function" ? n(el) : el + n).join("");
};

console.log("hello".eachChar(" ")); // "h e l l o "
console.log("hello".eachChar("123")); // "h123e123l123l123o123"
console.log("hello".eachChar(c => c.toUpperCase())); // "h123e123l123l123o123"




String.prototype.eachChar = function(fn) {
  return [...this]
    .map((typeof fn === 'string') ? c => c + fn : fn)
    .join('');
};



String.prototype.eachChar = function (x) {
  return this.replace(/(.)/g, typeof x == "string" ? "$1" + x : x)
}



String.prototype.eachChar = function(f){  
  var mapFunc = f instanceof Function ? f : function(char){
    return char + f;
  }  
  return Array.prototype.map.call(this, mapFunc).join("");  
}



String.prototype.eachChar = function(arg) {
  return typeof arg === 'string' ? [...this].map(el => el + arg).join('') : [...this].map(el => arg(el)).join('');
}



