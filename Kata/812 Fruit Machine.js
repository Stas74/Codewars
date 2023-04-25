// Fruit Machine

/*

Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), 
the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) 
or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. 
Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side 
of the machine as distinct from a button on the front panel, and because of their ability to leave the player 
in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. 
(Source Wikipedia)

Task
You will be given three reels of different images and told at which index the reels stop. 
From this information your job is to return the score of the resulted reels.

Rules

1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.

Returns

Return an integer of the score.

Example

Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);

Scoring

reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50

Return

result == 50

*/

const score = [
  "empty",
  "Jack",
  "Queen",
  "King",
  "Bar",
  "Cherry",
  "Seven",
  "Shell",
  "Bell",
  "Star",
  "Wild",
];

function fruit(reels, spins){
  let finObj = {};
  spins.map((el, i) => finObj[reels[i][el]] ? finObj[reels[i][el]] += 1 : finObj[reels[i][el]] = 1);
  let size = Object.keys(finObj).length;
  // console.log("finObj = ", finObj)
  // console.log("size = ", size)
  if (size == 1 && Object.keys(finObj)[0] == "Wild") {
    return 100;
  }
  if (size == 1) {
    return score.indexOf(Object.keys(finObj)[0]) * 10
  }
  if (size == 2 && Object.keys(finObj).some(el => el == "Wild")) {
    let twoSame = score.indexOf(Object.keys(finObj).filter(e => finObj[e] == 2)[0])
    // console.log("twoSame = ", twoSame)
    return twoSame == 10 ? 10 : twoSame * 2;
  }
  if (size == 2) {
    // console.log("size = 2")
    // console.log(Object.keys(finObj).filter(e => finObj[e] == 2))
    // console.log(finObj['King'])
    return score.indexOf(Object.keys(finObj).filter(e => finObj[e] == 2)[0])
  }
  return 0
}

// function fruit(reels, spins){
//   let finArr = [];
//   spins.map((el, i) => finArr.push(reels[i][el]));
//   return finArr.map(el => score.indexOf(el));
// }

reel = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [0,0,0];

console.log(fruit([reel,reel,reel],spin)); // 100

reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
spin = [5,4,3];

console.log(fruit([reel1,reel2,reel3],spin)); // 0

reel1 = ["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"];
reel2 = ["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"];
reel3 = ["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"];
spin = [0,0,1];

console.log(fruit([reel1,reel2,reel3],spin)); // 3


reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
spin = [0,5,0];
console.log(fruit([reel1,reel2,reel3],spin)); // 6




function fruit(reels, spins) {
  let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
  
  let [a, b, c] = reels
    .map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
    .sort((a, b) => a - b);

  if (a === b && b === c)
    return a * 10;
    
  if (a === b)
    return c === 10 ? a * 2 : a;
  
  return b === c ? b : 0;
}




function fruit(reels, spins){  
  var points = {
    "Wild" : 10,
    "Star" : 9,
    "Bell" : 8,
    "Shell" : 7,
    "Seven" : 6,
    "Cherry" : 5,
    "Bar" : 4,
    "King" : 3,
    "Queen" : 2,
    "Jack" : 1
  };
  
  reels = reels.map(function(reel, spin){
    return(reel[spins[spin]])
  })
  
  if(reels[0] == reels[1] && reels[1] == reels[2]){
    var figure = reels[0];
    var score = points[figure]*10;
    return score;
  }
  
  else if(reels[0] == reels[1] || reels[1] == reels[2] || reels[0] == reels[2]){
    var pair = "";
    if(reels[0] == reels[1] || reels[0] == reels[2]) pair = reels[0];
    else pair = reels[1];
    var haveWild = (reels.indexOf("Wild") != -1 && pair != "Wild") ? true : false;
    var score = (haveWild) ? points[pair]*2 : points[pair];
    return score
  } 
  else return 0;
}



const fruitPoints = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
const fruitMachine = points => (reels, spins) => {
  const [a, b, c] = spins.map((spin, i) => reels[i][spin]).sort();
  return a !== b && b !== c ? 
    0 : (points.indexOf(b) + 1) * (
      c === a ? 10 : c === 'Wild' && b !== 'Wild' ? 2 : 1
    );
}
const fruit = fruitMachine(fruitPoints);




