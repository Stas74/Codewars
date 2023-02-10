// Where is my parent!?(cry)

/*
Mothers arranged a dance party for the children in school. 
At that party, there are only mothers and their children. 
All are having great fun on the dance floor when suddenly all the lights went out. 
It's a dark night and no one can see each other. 
But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/

function findChildren(dancingBrigade) {
  let momArr = dancingBrigade.replace(/[^A-Z]/g, "").split("").sort();
  return momArr.map(el => el + dancingBrigade.split("").filter(e => e == el.toLowerCase()).join("")).join("");
}

// console.log(momArr);
// console.log("letter = ", dancingBrigade.replace(/[^b]/g, ""));
// console.log("letter = ", dancingBrigade.replace(/[^e]/g, ""));
// momArr.map(el => console.log(el.toLowerCase()))
// return momArr.map(el => el + dancingBrigade.replace(/[^`${el.toLowerCase()`}]/g, ""))

console.log(findChildren("beeeEBb")); // "BbbEeee"
console.log(findChildren("uwwWUueEe")); // "EeeUuuWww" 

