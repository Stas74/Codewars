// Complete The Pattern #2

/*
You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)

Examples:

pattern(4):

4321
432
43
4

pattern(11):

1110987654321
111098765432
11109876543
1110987654
111098765
11109876
1110987
111098
11109
1110
11

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  let numArr = [];
  let finArr = [];
  for (let i = 1; i <= n; i++) {
    numArr.unshift(i);
  }
  for (let j = n; j > 0; j--) {
    finArr.push(numArr.slice(0, j));
  }
  return finArr.map((el) => el.join("")).join("\n");
}

console.log(pattern(1)); // "1"
console.log(pattern(2)); // "21\n2"
console.log(pattern(5)); // "54321\n5432\n543\n54\n5"



function pattern(n) {
  if (n < 1) return ''
  var lines = []
  
  for (var i = 0; i < n; i++) {
    var line = ''
    
    for (var j = n; j > i; j--) {
      line += j
    }
    
    lines.push(line)
  }  
  return lines.join('\n')
}



function pattern(n) {
 var number = "", output = "";
 while (n > 0) {
   number = number + n;
   output = number + (output ? "\n" : "") + output;
   n--;
 }
 return output;
}



function pattern(n){
  var output="";
  for(i=0;i<n;i++){
    for(j=n;j>i;j--){
      output+= j;
    }
    if(i<n-1)output+="\n"
  }   
  return output;
}



function pattern(n) {
  return n > 0 ? Array.apply(n, Array(n)).map(function(v, i) {return Array.apply(0, Array(n - i)).map(function(w, j) {return n - j;}).join('');}).join('\n') : '';
}



const pattern = n =>
  n > 0 ? [...Array(n)].map((_, idx) => [...Array(n - idx)].map((_, idx) => n - idx).join(``)).join(`\n`) : ``;


const pattern=(n,s='')=>Array.from({length:n},_=>s=s+n--).reverse().join`\n`;
/*
Notes:
Handling negtive values of n is handled by using Array.from({length:n}) 
instead of Array.from(Array(n)).
Array(n) will throw an Uncaught RangeError when n is negative.

Calling .map exlicitly on the array is avoided because a map function
 can be passed as the second argument to Array.from

The expression s=s+n-- is doing 3 things in one.
1 - changing the value of s by appending the current value of n
2 - decrementing n by one
3 - returning the new value of s as the result of the map function.

join`\n` saves 2 characters by calling .join as a tag function.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
When called as a tag function, the first argument passed to join is an array of string values.
When the value passed to Array.prototype.join is not a string, it gets converted to a string.
Arrays get converted to strings as a string of comma separated values.
An array with just a single string element will get converted to simply the string element.
*/
