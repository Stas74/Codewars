// All Star Code Challenge #1

/*
All Star Code Challenge #1

Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG

Examples:
function NBAplayer(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}

var iverson = new NBAplayer("Iverson", "76ers", 11.2);
var jordan = new NBAplaer("Jordan", "bulls", 20.2);
sumPPG(iverson, jordan); // => 31.4
*/

function sumPPG(playerOne, playerTwo) {
  return playerOne.ppg + playerTwo.ppg;
}

function NBAplayer(name, team, ppg) {
  this.name = name;
  this.team = team;
  this.ppg = ppg;
}

var iverson = new NBAplayer("Iverson", "76ers", 11.2);
var jordan = new NBAplayer("Jordan", "bulls", 20.2);

console.log(sumPPG(iverson, jordan)); // 31.4




function sumPPG(playerOne, playerTwo){
  if(playerOne.hasOwnProperty('ppg') && playerTwo.hasOwnProperty('ppg'))
  {
    return playerOne.ppg + playerTwo.ppg;
  }
  return -1;  
}


