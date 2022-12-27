// Alphabet war - airstrike - letters massacre

/*
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. 
The tension between left side letters and right side letters was too high and the war began. 
The letters called airstrike to help them in war - dashes and dots are spreaded everywhere on the battlefield.

Task
Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. 
Return who wins the fight after bombs are exploded. 
When the left side wins return Left side wins!, when the right side wins return Right side wins!, 
in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

Example
alphabetWar("s*zz");           //=> Right side wins!
alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWar("zzzz*s*");       //=> Right side wins!
alphabetWar("www*www****z");  //=> Left side wins!
*/


function alphabetWar(fight) {
  const points = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };
  const finStr = [];
  const arrFight = fight.split("");
  for (let i = 0; i < fight.length; i++) {
    if (arrFight[i - 1] !== "*" && arrFight[i] !== "*" && arrFight[i + 1] !== "*") {
      finStr.push(arrFight[i]);
    }
  }
  const total = finStr.reduce((prev, cur) => prev + (points[cur] ? points[cur] : 0), 0);
  return total == 0 ? "Let's fight again!" : total > 0 ? "Left side wins!" : "Right side wins!";
}

console.log(alphabetWar("sz**z**zs")); // "Left side wins!"
console.log(alphabetWar("zz*zzs")); // "Right side wins!"
console.log(alphabetWar("z*dq*mw*pb*s")); // "Let's fight again!"
