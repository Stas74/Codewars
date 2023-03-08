// Ghostbusters (whitespace removal)

/*
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"
*/

function ghostBusters(building) {
  return building.split(" ").length == 1 ? "You just wanted my autograph didn't you?" : building.replace(/[\s]/g, "")
}

console.log(ghostBusters("Factor y")); // "Factory"
console.log(ghostBusters("O  f fi ce")); // "Office"
console.log(ghostBusters("BusStation")); // "You just wanted my autograph didn't you?"



function ghostBusters(building) {
  return /\s/.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?";
}


let ghostBusters = s => / /.test(s) ? s.replace(/ /g, '') : 'You just wanted my autograph didn\'t you?';


const ghostBusters = ($) => 
  $.replace(/\s/g, '') === $ ? "You just wanted my autograph didn't you?" : $.replace(/\s/g, '')


const ghostBusters = building =>
  /\s/.test(building)
    ? building.replace(/\s/g, ``) : `You just wanted my autograph didn't you?`;
