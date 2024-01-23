// Thinkful - String Drills: Areacode extractor

/*
You've got a bunch of textual data with embedded phone numbers. Write a function area_code() 
that finds and returns just the area code portion of the phone number.

>>> message = "The supplier's phone number is (555) 867-5309"
>>> area_code(message)
'555'
The returned area code should be a string, not a number. Every phone number is formatted like in the example, 
and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.
*/

function areaCode(text) {
  return text.match(/\((.*)\)/).pop();
}
// Notice: this solution can be used for strings having only single "(" and ")"

console.log(areaCode("The supplier's phone number is (555) 867-5309")); // '555'
console.log(areaCode("Grae's cell number used to be (123) 456-7890")); // '123'
console.log(areaCode("The 102nd district court's fax line is (124) 816-3264")); // '124'
