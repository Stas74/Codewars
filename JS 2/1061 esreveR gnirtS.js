// esreveR gnirtS

/*
Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"
*/

String.prototype.reverse = function reverse() {
  return this.split("").reverse().join("");
};




//Create reverse function for the String prototype
String.prototype.reverse = function () {
  return [...this].reverse().join``;
};



// lets make something different
String.prototype.reverse = function() {
  let rev = [];
  for (let letter of this) {
    rev.unshift(letter);
  }
  return rev.join('');
}



String.prototype.reverse = function(){
  return this.length ? this.substring(1).reverse() + this.charAt(0) : "";
}




String.prototype.reverse = function() {
  return this.split('').reduceRight((acc, val) => acc + val,'')
}




String.prototype.reverse=function(){
  return [...this.split(' ')].map(e => [...e].reverse().join('')).reverse().join(' ');
};



//Create reverse function for the String prototype

String.prototype.reverse=function(...args){
    let b = args; 
    
  try{
    return  [...this].reverse().join('');
    }
   catch(e){
     return this
   }
}



String.prototype.reverse=function() {
  return [...this].reverse().join``
}



//Create reverse function for the String prototype
String.prototype.reverse = function() {return this.split``.reverse().join``}
