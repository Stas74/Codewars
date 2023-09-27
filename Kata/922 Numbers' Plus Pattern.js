// Numbers' Plus Pattern

/*
#Task# Raj once wanted to code a program to make a plus sign using the numbers but he didn't have any idea to do so. 
Using n as a parameter in the function pattern complete the code and solve the pattern so that Raj fells happy.

###Rules/Note:###

You are assured that n>1
There are white spaces on top and bottom left corner (take help of test cases)
#Examples#

pattern(2)

 1
121
 1
pattern(5)

    1
    2
    3
    4
123454321
    4
    3
    2
    1
  
*/

function pattern(n) {
  let output = "";
  let finArr = [];
  for (let i = 1; i < n; i++) {
    if (i < 10) {
      finArr.push(" ".repeat(n - 1) + i);
      output += i;
    } else {
      finArr.push(" ".repeat(n - 1) + String(i).slice(-1));
      output += String(i).slice(-1);
    }
  }
  output += String(n).slice(-1) + output.split('').reverse().join('');
  return finArr.join("\n") + "\n" + output + "\n" + finArr.reverse().join("\n") + "\n";
}


console.log(pattern(3)); // "  1\n  2\n12321\n  2\n  1\n"
console.log(pattern(6)); // "     1\n     2\n     3\n     4\n     5\n12345654321\n     5\n     4\n     3\n     2\n     1\n"
console.log(pattern(10));
// "         1\n         2\n         3\n         4\n         5\n         6\n         7\n         8\n         9\n1234567890987654321\n         9\n         8\n         7\n         6\n         5\n         4\n         3\n         2\n         1\n"




function pattern(n) { 
  let nums = Array.from({ length: n - 1 }, (_, i) => ((i + 1) % 10).toString());
  let space = " ".repeat(n - 1);
  let vert = nums.map(num => space + num);
  
  return vert.join("\n")
    + "\n"
    + nums.join("")
    + (n % 10).toString()
    + nums.reverse().join("")
    + "\n"
    + vert.reverse().join("\n")
    + "\n";
}



function pattern(n){
  if (n < 2) return '';
  let range = [...Array(n*2-1)],
      toDigit = i => (i < n ? i : 2*n - i) % 10;
  return range.map(
    (_, i) => range.map(
      (_, j) =>
        j == n-1 ? toDigit(i+1) :
        i == n-1 ? toDigit(j+1) :
        j < n ? ' ' : ''
    ).join('')
  ).join('\n')+'\n';
}



function pattern(n) { 
  var output="";
  var separator = " ".repeat(n - 1);

  let a = Array.from({ length: n }, (v, k) => {
    let index = k + 1;
    let value = (index < 10) ? index : index % 10;
    if(index !== n) output+=`${separator}${value}\n`;
    return value;
  });
  
  let b = [...a].reverse();
  b.shift();
  output+=`${a.join("")}${b.join("")}\n`;
  
  output+=b.map(item => `${separator}${item}\n`).join("");
  return output;
}




