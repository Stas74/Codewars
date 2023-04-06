// Ironman Triathlon

/*
An Ironman Triathlon is one of a series of long-distance triathlon races 
organized by the World Triathlon Corporaion (WTC). 
It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile) 
(run, raced in that order and without a break. It hurts... trust me.

Your task is to take a distance that an athlete is through the race, and return one of the following:

If the distance is zero, return 'Starting Line... Good Luck!'.

If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

If the athlete will be riding their bike, return an object with 'Bike' as the key, 
and the remaining race distance as the value.

If the athlete will be running, and has more than 10 miles to go, 
return an object with 'Run' as the key, and the remaining race distance as the value.

If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

Finally, if the athlete has completed te distance, return "You're done! Stop running!".

All distance should be calculated to two decimal places.

*/

function iTri(s) {
  let total = 140.6;
  return s == 0
    ? "Starting Line... Good Luck!"
    : s <= 2.4
    ? { Swim: `${(total - s).toFixed(2)} to go!` }
    : s <= 114.4
    ? { Bike: `${(total - s).toFixed(2)} to go!` }
    : s <= 130.6
    ? { Run: `${(total - s).toFixed(2)} to go!` }
    : s <= total
    ? { Run: "Nearly there!" }
    : "You're done! Stop running!";
}

console.log(iTri(36)); // {'Bike':'104.60 to go!'}
console.log(iTri(103.5)); // {'Bike':'37.10 to go!'}
console.log(iTri(0)); // 'Starting Line... Good Luck!'
console.log(iTri(2)); // {'Swim':'138.60 to go!'}



function iTri(dist){
  let totalDist = 2.4 + 112 + 26.2;
  if (dist === 0) return 'Starting Line... Good Luck!';
  if (dist <= 2.4) return {'Swim': `${(totalDist - dist).toFixed(2)} to go!`};
  if (dist <= 114.4) return {'Bike': `${(totalDist - dist).toFixed(2)} to go!`};
  if (dist <= 127) return {'Run': `${(totalDist - dist).toFixed(2)} to go!`};
  if (dist < totalDist) return {'Run': `Nearly there!`};
  return "You're done! Stop running!";
}



const iTri = s =>
  s >= 140.6 ? `You're done! Stop running!` : 
s ? {[s > 114.4 ? `Run` : s > 2.4 ? `Bike` : `Swim`]: s > 130.6 ? `Nearly there!` : (140.6 - s).toFixed(2) + ` to go!`} : `Starting Line... Good Luck!`;




// swim, bycicle, run

const raceInfo = [
  {type:'Swim', ml: 2.4}, 
  {type:'Bike', ml: 112}, 
  {type:'Run', ml: 26.2}, 
];

const resultMiles = raceInfo.reduce((a,b) => Number(a) + Number(b.ml),0);

const iTri = (s) => {
//its gonna be a long day!
// edge cases
console.log(s);
  if( s >= resultMiles) {
    return `You're done! Stop running!`; 
  } else if(s === 0) {
    return 'Starting Line... Good Luck!';
  } else if ( resultMiles - s  <= 10) {
    return { 'Run': 'Nearly there!' };
  } 
  
  const togo = `${(resultMiles - s).toFixed(2)} to go!`;
  let key = raceInfo[raceInfo.length - 1].type;

  if( s <= raceInfo[0].ml) {
    return {[raceInfo[0].type] : togo};
  }
  for(let item of raceInfo) {
    if(s <= Number(item.ml)) {
      key = item.type;
      break;
    }
  }
  return {[key] : togo};
}
