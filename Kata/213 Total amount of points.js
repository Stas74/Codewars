// Total amount of points

/*
Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. 
Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
  let point = 0;
  games.forEach( el => 
    el[0] > el[2] ? point += 3 : el[0] === el[2] ? point += 1 : point += 0
  )
  return point;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))  // 1



const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)


const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)




function points(games) {
  return games.reduce((output,current)=>{
    let x = parseInt(current[0]);
    let y = parseInt(current[2]);
    let value= x>y ? 3 : x===y ? 1 : 0;
    return output+value;
  },0)
}



function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
