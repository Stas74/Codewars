// Complete The Pattern #10 - Parallelogram

/*
You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.

Rules/Note:
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
The length of each line = (2n-1).
Range of n is (-∞,100]

Examples:

pattern(5):

    12345
   12345 
  12345  
 12345   
12345    

pattern(10):

         1234567890
        1234567890 
       1234567890  
      1234567890   
     1234567890    
    1234567890     
   1234567890      
  1234567890       
 1234567890        
1234567890         

pattern(15):

              123456789012345
             123456789012345 
            123456789012345  
           123456789012345   
          123456789012345    
         123456789012345     
        123456789012345      
       123456789012345       
      123456789012345        
     123456789012345         
    123456789012345          
   123456789012345           
  123456789012345            
 123456789012345             
123456789012345  
*/

function pattern(n) {
  let num = "";
  let finArr = [];
  for (let i = 1; i <= n; i++) {
    num += i % 10;
  }
  for (let j = 0; j < n; j++) {
    finArr.push(" ".repeat(n - 1 - j) + num + " ".repeat(j));
  }
  return finArr.join("\n");
}

console.log(pattern(3)); // "  123\n 123 \n123  "
console.log(pattern(5)); // "    12345\n   12345 \n  12345  \n 12345   \n12345    "
console.log(pattern(15));




function pattern(n) {
  var i, line = '', lines = [];
  for (i=1;i<=n;i++) line += i%10;
  for (i=0;i<n;i++) lines.push(Array(n-i).join(' ')+line+Array(i+1).join(' '));
  return lines.join("\n");
}



const pattern = n =>
  (nums => Array.from({length: n}, (_, idx) => ` `.repeat(n - idx - 1) + nums + ` `.repeat(idx)).join(`\n`))
  (Array.from({length: n}, (_, idx) => ++idx % 10).join(``));



function pattern(n){
  return n < 1 ? '' : 
    Array.apply(0, Array(n)).map(function(_, i) {
      return Array.apply(0, Array(n - i)).join(' ') +
             Array.apply(0, Array(n)).map(function(_, j) {return (j + 1) % 10;}).join('') +
             Array.apply(0, Array(i + 1)).join(' ');
    }).join('\n');
}




const pattern = (n,s='') => Array.from({length:n}, (_,i)=> s+=(i+1)%10).map((_,i)=> s.padEnd(n+i).padStart(n*2-1)).join('\n');



function pattern(n) {
  const sequence = Array.from({length: n}, (v, k) => (k + 1) % 10).join('');
  return Array.from({length: n}, (v, k) => ' '.repeat(n - k - 1) + sequence + ' '.repeat(k)).join('\n');
}



function pattern(n){
 var output="";
 
 if (n > 0)
 {
   var results = [];
   var line = Array(n).join(" ");
   for (i=1; i <= n; i++)
   {
     line += (i % 10);
   }
   results.push(line);
   
   for (i=1; i < n; i++)
   {
     results.push(results[i-1].substring(1)+ " ");
   }   
   output = results.join("\n");
 }
 
 return output;
}
