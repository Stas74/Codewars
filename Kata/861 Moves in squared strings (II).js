// Moves in squared strings (II)

/*
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Clock rotation 180 degrees: rot
rot(s) => "ponm\nlkji\nhgfe\ndcba"
selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) 
It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order 
(hopefully) to better show the rotation when printed.

s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

or printed:

|rotation        |selfie_and_rot
|abcd --> ponm   |abcd --> abcd....
|efgh     lkji   |efgh     efgh....
|ijkl     hgfe   |ijkl     ijkl....   
|mnop     dcba   |mnop     mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba

Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

Task:
Write these two functions rotand selfie_and_rot

and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)

Examples:

s = "abcd\nefgh\nijkl\nmnop"
oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

Notes:
The form of the parameter fct in oper changes according to the language. 
You can see each form according to the language in "Your test cases".

It could be easier to take these katas from number (I) to number (IV)

Forthcoming katas will study other tranformations.

Bash Note:

The input strings are separated by , instead of \n. 
The ouput strings should be separated by \r instead of \n. See "Sample Tests".


*/

function rot(strng) {
  return strng.split("\n").map(el => el.split("").reverse().join("")).reverse().join("\n");
}
function selfieAndRot(strng) {
  return strng.split("\n").map(el => el + ".".repeat(el.length)).concat(
   rot(strng).split("\n").map(el =>".".repeat(el.length) + el)).join("\n");
}
function oper(fct, s) {
  return fct(s);
}

console.log(oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL")); 
// "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif"
console.log(oper(rot, "rkKv\ncofM\nzXkh\nflCB")); // "BClf\nhkXz\nMfoc\nvKkr"


console.log(oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP")); 
// "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"
console.log(oper(selfieAndRot, "uLcq\nJkuL\nYirX\nnwMB")); 
// "uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu"
