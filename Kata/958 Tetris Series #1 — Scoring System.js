// Tetris Series #1 — Scoring System

/*
A History Lesson
Tetris is a puzzle video game originally designed and programmed by Soviet Russian software engineer Alexey Pajitnov. 
The first playable version was completed on June 6, 1984. 
Pajitnov derived its name from combining the Greek numerical prefix tetra- (the falling pieces contain 4 segments) and tennis, 
Pajitnov's favorite sport.

About scoring system
The scoring formula is built on the idea that more difficult line clears should be awarded more points. 
For example, a single line clear is worth 40 points, clearing four lines at once (known as a Tetris) is worth 1200.

A level multiplier is also used. The game starts at level 0. 
The level increases every ten lines you clear. 
Note that after increasing the level, the total number of cleared lines is not reset.

For our task you can use this table:

Level	Points for 1 line
Points for 2 lines	Points for 3 lines	Points for 4 lines
0	40	100
300	1200
1	80	200	600	2400
2	120	300	900	3600
3	160	400	1200	4800
...
7	320	800	2400	9600
...	For level n you must determine the formula by yourself using given examples from the table.

Task
Calculate the final score of the game using original Nintendo scoring system

Input
Array with cleaned lines.
Example: [4, 2, 2, 3, 3, 4, 2]
Input will always be valid: array of random length (from 0 to 5000) with numbers from 0 to 4.

Output
Calculated final score.
def get_score(arr) -> int: return 0

Example

getScore([4, 2, 2, 3, 3, 4, 2]); // returns 4900

Step 1: +1200 points for 4 lines (current level 0). Score: 0+1200=1200;
Step 2: +100 for 2 lines. Score: 1200+100=1300;
Step 3: +100. Score: 1300+100=1400;
Step 4: +300 for 3 lines (current level still 0). Score: 1400+300=1700.
Total number of cleaned lines 11 (4 + 2 + 2 + 3), so level goes up to 1 (level ups each 10 lines);
Step 5: +600 for 3 lines (current level 1). Score: 1700+600=2300;
Step 6: +2400. Score: 2300+2400=4700;
Step 7: +200. Total score: 4700+200=4900 points.

*/

function getScore(arr) {
  const scoreArr = [40, 100, 300, 1200];
  let level = 1;
  let levelCounter = 0;
  let totalScore = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      totalScore += scoreArr[arr[i] - 1] * level;
      levelCounter += arr[i];
    }
    if (levelCounter > 9) {
      level += 1;
      levelCounter = levelCounter - 10;
    }
  }
  return totalScore;
}

console.log(getScore([0, 1, 2, 3, 4])); // 1640
console.log(getScore([0, 1, 1, 3, 0, 2, 1, 2])); // 620
console.log(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3])); // 3300
console.log(getScore([0])); // 0
console.log(getScore([])); // 0
console.log(
  getScore([
    4, 0, 4, 1, 3, 1, 2, 4, 1, 1, 0, 1, 1, 4, 0, 0, 3, 3, 4, 1, 2, 2, 1, 0, 2,
    1, 2, 2, 1, 1, 2, 1, 0, 0, 0, 3, 2, 3, 1, 4, 0, 3, 3, 4,
  ])
); // 47920





function getScore(arr) {
   let score = 0,
       count = 0,
       sum = 0,
       level = 0;

   for(let i = 0; i < arr.length; i++) {
     count = count + arr[i];

     switch (arr[i]){
      case 0 : sum = 0;
             break;
      case 1 : sum = 40 + 40*level;
              break;
      case 2 : sum = 100 + 100*level;
              break;   
      case 3 : sum = 300 + 300*level;
              break;    
      case 4 : sum = 1200 + 1200*level;
              break;        
     }
     score = score + sum;
        if (count >= 10) {
        count = count - 10;
        level++;
      }
   }

  return score;
}



const score = [0,40,100,300,1200]

function getScore(arr) {
  let level = 1
  let line = 0
  let result = 0
  arr.forEach(item => {
    result += score[item] * level
    line += item
    if(line >= 10 * level) level++
  })
  return result
}



function getScore(arr) {
   const firstValues = [0, 40, 100, 300, 1200]
   let linesCleared = 0
   let level = 0
   let score = 0
   
   for (let i = 0; i < arr.length; i++) {
     linesCleared += arr[i]
     score += firstValues[arr[i]] * (level + 1)
     level = Math.floor(linesCleared / 10)
   }
   
   return score  
}



function getScore(arr) {
  const points = [0,40,100,300,1200]
  let p = 1;
  return arr.reduce((a,v,i)=>{
    p+=arr[i-1]||0
    return a+points[v]*Math.ceil(p/10)
  },0)
}



const getScore = arr => arr.reduce((o, c) => (o.s += [0,40,100,300,1200][c] * (o.t / 10 | 0), o.t += c, o), {s: 0, t: 10}).s;



const getScore = arr => 
  arr.reduce((pre, val) => (pre[0] += [0, 40, 100, 300, 1200][val] * (pre[1] / 10 + 1 | 0), pre[1] += val, pre), [0, 0])[0];
