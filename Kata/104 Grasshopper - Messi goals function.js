// Grasshopper - Messi goals function

// Messi goals function

// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions

// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(0, 0, 0)); // 0
console.log(goals(43, 10, 5)); // 58



const goals = (...a) => a.reduce((s, v) => s + v, 0);

const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let goals = [ laLigaGoals, copaDelReyGoals, championsLeagueGoals ];
  return goals.reduce( ( a, b ) => a + b ,0);
}
