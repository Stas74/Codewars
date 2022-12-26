// Unscrambled eggs

/*
The string given to your function has had an "egg" inserted directly after each consonant. 
You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
*/

function unscrambleEggs(word) {
  return word.replace(/egg/gi, "");
}

console.log(unscrambleEggs("ceggodegge heggeregge")); // "code here"
console.log(unscrambleEggs("FeggUNegg KeggATeggA")); // "FUN KATA"




function unscrambleEggs(word){
  return word.split("egg").join("")
}



function unscrambleEggs(word) {
  return word.replaceAll('egg', '');
}
