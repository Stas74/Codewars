// Complete The Pattern #7 - Cyclical Permutation

/*
You have to write a function pattern which creates the following pattern (See Examples) upto desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Examples:

pattern(9):

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678

pattern(5):

12345
23451
34512
45123
51234

Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  let numArr = [];
  let finArr = [];
  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }
  finArr.push(numArr);
  for (let j = 1; j < n; j++) {
    finArr.push(
      finArr[j - 1].slice(-(n - 1)).concat(finArr[j - 1].slice(0, 1))
    );
  }
  return finArr.map((el) => el.join("")).join("\n");
}

// console.log("slice1 = ", finArr[0].slice(0,1));
// console.log("slice2 = ", finArr[0].slice(-3));
// console.log("push = ", finArr.push(finArr[0].slice(-3).concat(finArr[0].slice(0,1))));
// console.log(finArr);


console.log(pattern(4)); // "1234\n2341\n3412\n4123"



function pattern(n) {
  return Array.from({ length: n }, (x, i) =>
    Array.from({ length: n }, (x, j) => (i + j) % n + 1).join('')
  ).join('\n');
}



const pattern = n =>
  n > 0? [...Array(n)].map((_, idx) => [...Array(n)].map((_, i) => (i + idx) % n + 1).join(``)).join(`\n`) : ``;



function pattern(n) {

  let res = []
  , terms = [];
  
  for (let i = 1; i <= n; i++)
    terms.push(i);
    
  for (let j = 0; j < n; j++)
    res.push(terms.slice(j).join('') + terms.slice(0, j).join(''));
  
  return res.join("\n");

}



function pattern(n) {
  return n < 1 ? '' : Array.apply(0, Array(n)).map(function(_, i) {return Array.apply(0, Array(n)).map(function(_, j) {return (i + j) % n + 1;}).join('');}).join('\n');
}



function pattern(n){
 var output=[],row=[];
 for (var i=1;i<=n;i++) row.push(i);
 for (var i=1;i<=n;i++){
   output.push(row.join(""));
   row=row.concat(row.shift());
 }
 return output.join("\n");
}



function pattern(n) {
  return Array.from({length: n}, function(v, i) {
    return Array.from({length: n}, function(v, j) {
      return (i + j + 1) % n || n;
    }).join('');
  }).join('\n');
}



function pattern(n){
 if (n<=0) return "";
 o=""; c=1; d=1;
 for (i=1;i<=n;i++) {
    c=d;
    for (j=1;j<=n;j++) {o+=c+""; if(++c>n) c=1}
    o+="\n"; d++;
 }
 return o.substr(0,o.length-1)
}



function pattern(n){
 var output="";
 for(var i = 1; i<=n;i++){
   var t = i;
   for(var k = 1; k<=n;k++){
     output += (t==n)?t++:t++%n;
   }
   if(i!=n)output +="\n";
  }
 return output;
}
