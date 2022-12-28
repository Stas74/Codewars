// Maze Runner

/*
Introduction

Welcome Adventurer. 
Your aim is to navigate the maze and reach the finish point without touching any walls. 
Doing so will kill you instantly!

Task

You will be given a 2D array of the maze and an array of directions. 
Your task is to follow the directions given. 
If you reach the end point before all your moves have gone, you should return Finish. 
If you hit any walls or go outside the maze border, you should return Dead. 
If you find yourself still in the maze after using all the moves, you should return Lost.

The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point

  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

Rules

1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format 
of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.

Good luck, and stay safe!
*/

function mazeRunner(maze, directions) {
  let startPoint = "";
  let route = [];
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 2) {
        startPoint = [i, j];
      }
    }
  }

  for (let index = 0; index < directions.length; index++) {
    if (directions[index] == "N") {
      startPoint[0] -= 1;
    } else if (directions[index] == "S") {
      startPoint[0] += 1;
    } else if (directions[index] == "E") {
      startPoint[1] += 1;
    } else if (directions[index] == "W") {
      startPoint[1] -= 1;
    }
    // Check status
    if (startPoint[0] < 0 || startPoint[0] == maze.length) {
      return "Dead";
    }
    if (startPoint[1] < 0 || startPoint[1] == maze.length) {
      return "Dead";
    }

    if (maze[startPoint[0]][startPoint[1]] == 1) {
      return "Dead";
    } else if (maze[startPoint[0]][startPoint[1]] == 3) {
      return "Finish";
    }
  }
  return "Lost";
}

var maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])); //  'Finish'
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"])); //  'Finish'
console.log(mazeRunner(maze,["N","N","N","W","W"])); //  'Dead'
console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"])); //  'Dead'
console.log(mazeRunner(maze,["N","E","E","E","E"])); //  'Lost'



function mazeRunner(maze, directions) {
  var size=maze.length,i=-1,j=-1,di={N:-1,S:1,E:0,W:0},dj={W:-1,E:1,N:0,S:0}
  while(!maze[++i].includes(2));while(maze[i][++j]!=2);
  for(var s of directions){
    i+=di[s],j+=dj[s]
    if(i<0||j<0||i>=size||j>=size||maze[i][j]==1) return "Dead"
    if(maze[i][j]==3) return "Finish"
  }
  return "Lost"
}



function mazeRunner(maze, directions) {
  var path = Array(), curX, curY;
  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 2) {
        curX = j;
        curY = i;
      }
    }
  }
  for (var i = 0; i < directions.length; i++) {
    if (directions[i] == 'N') curY--;
    if (directions[i] == 'S') curY++;
    if (directions[i] == 'W') curX--;
    if (directions[i] == 'E') curX++;
    
    // path.push(maze[curY][curX]);
    if (!maze[curY]) return 'Dead';
    if (maze[curY][curX] == 3) return 'Finish';
    if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return 'Dead';
  }
  return 'Lost';
}



function mazeRunner(maze, dirs) {
  var y = maze.findIndex(arr => arr.includes(2));
  var x = maze[y].indexOf(2);
  var curPos;
  for (var i = 0; i < dirs.length; i++) {
    if (dirs[i] === 'N') y--;
    if (dirs[i] === 'S') y++;
    if (dirs[i] === 'W') x--;
    if (dirs[i] === 'E') x++;
    if (!maze[y]) return 'Dead';
    curPos = maze[y][x];
    if (curPos === 3) return 'Finish';
    if (curPos === 1 || curPos === undefined) return 'Dead';
  }
  return 'Lost';
}



var findStart = function(maze){
  for(i = 0; i < maze.length; i++){
    for(j = 0; j < maze.length; j++)
      if(maze[i][j] == 2)
        return [i, j];
  }
}

function mazeRunner(maze, directions) {
  let pos = findStart(maze);
  for(var i = 0; i < directions.length; i++){
    if(directions[i] == 'N')
      pos[0] -=1;
    else if(directions[i] == 'E')
      pos[1] +=1;
    else if(directions[i] == 'W')
      pos[1] -=1;
    else
      pos[0] +=1;
    if(pos[0] <0 || pos[1] <0 || pos[0] >= maze.length || pos[1] >= maze.length) return 'Dead';
    if(maze[pos[0]][pos[1]] == 1) return 'Dead';
    if(maze[pos[0]][pos[1]] == 3) return 'Finish';
  }
return 'Lost';
}
