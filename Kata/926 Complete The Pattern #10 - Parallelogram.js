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
