// Complete The Pattern #1

/*
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
Examples:
pattern(5):

1
22
333
4444
55555
pattern(11):

1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111

Hint: Use \n in string to jump to next line
*/

function pattern(n) {
  let fin = "";
  for (let i = 1; i <= n; i++) {
    fin += (i + "").repeat(i) + "\n";
  }
  return fin.slice(0, -1);
}

console.log(pattern(1)); // "1"
console.log(pattern(2)); // "1\n22"
console.log(pattern(5)); // ""1\n22\n333\n4444\n55555""




function pattern(n) {
  var res = [], i;
  for(i = 1; i <= n; i++) {
    res.push(Array(i + 1).join(i));
  }
  return res.join('\n');
}



const pattern = n => {
 let out=[];
 for (let i = 1; i <= n; i++){
   out.push(i.toString().repeat(i))
 }
 return out.join('\n');
}



const pattern = n => n>0 ? Array(n).fill('@').map((_,i)=>i+1).map(v=>String(v).repeat(v)).join('\n') : ''


function pattern(n){
 var output="";
   // Happy Coding ^_^
  if(n>0){
    output += 1;
    for(var i = 2; i <= n; i++) {
    	output += "\n"+Array(i+1).join(i);
    }
 }
 return output;
}
