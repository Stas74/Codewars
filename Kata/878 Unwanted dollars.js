// Unwanted dollars

/*
If you're faced with an input box, like this:

                                           +--------------+
  Enter the price of the item, in dollars: |              |
                                           +--------------+

do you put the $ sign in, or not? Inevitably, some people will type a $ sign and others will leave it out. 
The instructions could be made clearer - but that won't help those annoying people who never read instructions anyway.

A better solution is to write code that can handle the input whether it includes a $ sign or not.

So, we need a simple function that converts a string representing a number 
(possibly with a $ sign in front of it) into the number itself.

Remember to consider negative numbers (the - sign may come either before or after the $ sign, if there is one), 
and any extraneous space characters (leading, trailing, or around the $ sign) that the users might put in. 
You do not need to handle input with trailing characters other than spaces (e.g. "1.2 3" or "1$"). 
If the given string does not represent a number, (either with or without a $ sign), return 0.0 .
*/

function money_value(s) {
  return +s.replace(/^0+/, "").replace(/[$\s]/g, "") || 0;
}

console.log(money_value(" $5.67")); // 5.67
console.log(money_value("-$ 0.1")); // -0.10
console.log(money_value("$-2.3456")); // -2.3456
console.log(money_value("007")); // 7.00
console.log(money_value(" $ 89")); // 89.0



const money_value = s => +s.replace(/\s|\$/g, '') || 0


const money_value = s =>
  +s.replace(/[^-\d.]/g, ``) || 0;


const money_value = s => 
  +s.replace(/[$ ]/g, '') || 0


function money_value(s)
{
  const regex = /([$ ]*)/g;
  let sNew = s.replace(regex, '');
  let sFloat = parseFloat(sNew);
  return isNaN(sFloat) ? 0 : sFloat;
}



money_value = a => /\d/.test(a)?+a.replace(/[ $]/g,'') : 0.0



function money_value(s){
   console.log(s);
   var arr = s.split("");
   var sN = "";
   
   for(let i = 0; i < arr.length; i++){
     if(arr[i] == "$" || arr[i] == " "){
     }
     else{
       sN += arr[i];
     }
   }
   if(sN == "" || sN == "-") return 0;
   return parseFloat(sN);
}
