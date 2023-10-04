// Complete The Pattern #3 (Horizontal Image of #2)

/*
You have to write a function pattern which creates the following pattern upto n number of rows. 
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Pattern:
(n)
(n)(n-1)
(n)(n-1)(n-2)
................
.................
(n)(n-1)(n-2)....4
(n)(n-1)(n-2)....43
(n)(n-1)(n-2)....432
(n)(n-1)(n-2)....4321

Examples:

pattern(4):

4
43
432
4321

pattern(6):

6
65
654
6543
65432
654321

Note: There are no blank spaces

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  let numArr = [];
  let finArr = [];
  for (let i = n; i >= 1; i--) {
    numArr.push(i);
  }
  for (let j = 1; j <= n; j++) {
    finArr.push(numArr.slice(0, j));
  }
  return finArr.map((el) => el.join("")).join("\n");
}

console.log(pattern(5)); // "5\n54\n543\n5432\n54321"



function pattern(n) {
  var res = [], line = '', i;
  for(i = n; i > 0; i--) {
    line += i;
    res.push(line);
  }
  return res.join('\n');
}



function pattern(n){
  var result = [], last = '';
  for (var i = n; i > 0; i--) {
    result.push(last += i);
  }  
  return result.join('\n');
}



const pattern = n =>
  [...Array(Math.max(n, 0))].map((_, idx) => [...Array(++idx)].map((_, idx) => n - idx).join(``)).join(`\n`);



function pattern(n) {
  return n > 0 ? Array.apply(n, Array(n)).map(function(_, i) {return Array.apply(0, Array(i + 1)).map(function(_, j) {return n - j;}).join('');}).join('\n') : '';
}


const pattern = (n,s='')=> Array.from({length:n}, _=> s=s+n--).join('\n');



function pattern(n){
 var number = n, line = n < 1 ? "" : "" + n, output = line;
 
 for(var i = 1; i < n; i++)
 {
   line += (--number);
   output += "\n" + line;
 }
 return output;
}
