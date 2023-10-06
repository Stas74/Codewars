// Complete The Pattern #5 - Even Ladder

/*
You have to write a function pattern which creates the following pattern up to n/2 number of lines.

If n <= 1 then it should return "" (i.e. empty string).
If any odd number is passed as argument then the pattern should last up to the largest even number 
which is smaller than the passed odd number.

Examples:

pattern(8):

22
4444
666666
88888888

pattern(5):

22
4444

Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  let finStr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      finStr.push(String(i).repeat(i));
    }
  }
  return finStr.join("\n");
}

console.log(pattern(2)); // "22"
console.log(pattern(5)); // "22\n4444"




function pattern(n){
  var res = [], i = 1;
  while (i++ < n) res.push(Array(i + 1).join(i++));
  return res.join('\n');
}



const pattern = n =>
  n < 2 ? `` : [...Array(n >> 1)].map((_, idx) => 2 * idx + 2).map(val => `${val}`.repeat(val)).join(`\n`);



function pattern(n) {
  let res = '';
  
  for (let i = 2; i <= n; i += 2)
    res += "\n" + `${i}`.repeat(i);
    
  return res.slice(1);  
}


function pattern(n) {
  return n = n % 2 == 0 ? n : n - 1, n > 3 ? pattern(n - 2) + '\n' + Array.apply(0, Array(n)).map(function(_, i) {return n;}).join('') : n > 1 ? '22' : '';
}



function pattern(n){
  return n>1?[...Array(~~(n/2))].reduce((a,c,i) => a.concat([(2*i+2+'').repeat(2*i+2)]),[]).join('\n'):'';
}


pattern=n=>n<1?'':[...Array(n/2|0)].map((_,i)=>`${x=++i*2}`.repeat(x)).join`\n`
