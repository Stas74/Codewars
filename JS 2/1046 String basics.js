// String basics

/*
Hey CodeWarrior,

we've got a lot to code today!

I hope you know the basic string manipulation methods, because this kata will be all about them.

Here we go...

Background
We've got a very long string, containing a bunch of User IDs. This string is a listing, 
which seperates each user ID with a comma and a whitespace ("' "). 
Sometimes there are more than only one whitespace. Keep this in mind! 
Futhermore, some user Ids are written only in lowercase, others are mixed lowercase and uppercase characters. 
Each user ID starts with the same 3 letter "uid", e.g. "uid345edj". But that's not all! 
Some stupid student edited the string and added some hashtags (#). 
User IDs containing hashtags are invalid, so these hashtags should be removed!

Task
Remove all hashtags
Remove the leading "uid" from each user ID
Return an array of strings --> split the string
Each user ID should be written in only lowercase characters
Remove leading and trailing whitespaces
Note
Even if this kata can be solved by using Regex, please try to find a solution by using only the built-in String methods.

Some references from MDN:

String.prototype.trim()
String.prototype.split()
String.prototype.toLowerCase()
String.prototype.replace()
String.prototype.substring()
Array.prototype.map()

*/

function getUsersIds(str){
  return str.split(",").map(el => el.trim().toLowerCase().replace(/#/g, "").substring(3).trim());
}

console.log(getUsersIds("uid12345")); // "12345"
console.log(getUsersIds("   uidabc  ")); // "abc"
console.log(getUsersIds("#uidswagger")); // "swagger"
console.log(getUsersIds("uidone, uidtwo")); // "one", "two"
console.log(getUsersIds("uidCAPSLOCK")); // "capslock"

console.log(getUsersIds("uid##doublehashtag")); // "doublehashtag"
console.log(getUsersIds("  uidin name whitespace")); // "in name whitespace"
console.log(getUsersIds("uid##uidMultipleuid")); // "multipleuid"
console.log(getUsersIds("uid12 ab, uid#, uidMiXeDcHaRs")); // "12 ab", "", "mixedchars"
console.log(getUsersIds(" uidT#e#S#t# ")); // "test"

console.log(getUsersIds('uid1 2  34 , uid 123456, uid123, uid123456 789#')); // [\'1 2  34\', \'123456\', \'123\', \'123456 789\']
