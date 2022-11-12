// Holiday III - Fire on the boat

/*
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. 
If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". 
Then return the string.
*/

function fireFight(s){
  return s.split(" ").map(el => el == "Fire" ? "~~" : el).join(" ")
}

console.log(fireFight("Mast Deck Engine Water Fire")); // "Mast Deck Engine Water ~~"
console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain")); 
// "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"



const fireFight = s =>
  s.replace(/Fire/g, `~~`);


