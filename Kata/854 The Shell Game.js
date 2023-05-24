// The Shell Game

/*

"The Shell Game" involves cups upturned on a playing surface, with a ball placed underneath one of them. 
The index of the cups are swapped around multiple times. 
After that the players will try to find which cup contains the ball.

Your task is as follows. 
Given the cup that the ball starts under, and list of swaps, return the location of the ball at the end. 
Cups are given like array/list indices.

For example, given the starting position 0 and the swaps [(0, 1), (1, 2), (1, 0)]:

The first swap moves the ball from 0 to 1
The second swap moves the ball from 1 to 2
The final swap doesn't affect the position of the ball.
So

swaps = [[0,1], [1,2], [1, 0]]
find_the_ball(0, swaps) == 2

There aren't necessarily only three cups in this game, but there will be at least two. 
You can assume all swaps are valid, and involve two distinct indices.

*/

function findTheBall(start, swaps) {
  swaps.forEach(element => {
    if (element.includes(start)) {
      start = element.filter(num => num != start)[0];
    }
  });
	return start;
}

console.log(findTheBall(0, [[0, 1]])); // 1
console.log(findTheBall(1, [[0, 1]])); // 0
console.log(findTheBall(0, [[0, 1], [1, 2], [2, 0], [0, 1], [1, 2], [2, 1], [2, 0], [0, 2]])); // 1




function find_the_ball(start,swaps) {
  return swaps.reduce(function(ball, swap) {
    if (swap[0] === ball) ball = swap[1];
    else if (swap[1] === ball) ball = swap[0];
    return ball;
  }, start);
}



find_the_ball=function(start,swaps){
  return swaps.reduce((s,v) => { return s == v[0] ? v[1] : s == v[1] ? v[0] : s}, start);
}



const find_the_ball = (start, swaps) => {
    let ball = start;
    swaps.forEach(s => {
        if (s[0] == ball) {
            ball = s[1]
        } else if (s[1] == ball) {
            ball = s[0];
        }
    });
    return ball;
}



const find_the_ball = (start, swaps) =>
  swaps.reduce((pre, val) => val.includes(pre) ? val.find(val => val !== pre) : pre, start);



find_the_ball=function(b,a){
  return (a.forEach(x=>x.includes(b)&&(b=x.find(x=>x!=b))),b);
}
