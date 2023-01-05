// Search for letters

/*
The objective is to set each of the 26 characters of the output string to either '1' or '0' 
based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character
 of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, s
 et the second character to '1', and so on for the rest of the alphabet.

For instance:

"a   **&  cZ"  =>  "10100000000000000000000001"
*/

function change(string) {
  let finStr = "0".repeat(26).split(""); 
  string = string.replace(/[^a-z]/gi, "").toLowerCase();
  let uniqIndexStr = [...new Set([...string])].map(el =>  el.charCodeAt() - 97);
  uniqIndexStr.map((el) => finStr[el] = 1 )
  return finStr.join("");
}

console.log(change("aA **&  bzZ")); // "11000000000000000000000001"
