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



function alphabetWar(fight){
   fight = fight.replace(/[a-z]\*[a-z]|[a-z]\*|\*[a-z]/g,"")
    var l = 0;
    var r = 0;
    fight.split("").forEach(i=>"1sbpw".indexOf(i)>0?l+="1sbpw".indexOf(i):l)
    fight.split("").forEach(j=>"1zdqm".indexOf(j)>0?r+="1zdqm".indexOf(j):r)
    if(l==r){return "Let's fight again!"}
    return l>r ? "Left side wins!" : "Right side wins!";
}



const map = {w:-4, p:-3, b:-2, s:-1, m:4, q:3, d:2, z:1}

function alphabetWar(fight){
  var res = fight.replace(/[^*]?\*[^*]?/g, '').split('').reduce((a,b) => a + (map[b] || 0), 0);
  return res ? (res < 0 ? 'Left' : 'Right') + ' side wins!' : 'Let\'s fight again!';
}



function alphabetWar(str) {
  const arr = str.replace(/(?:.)?\*+.?/g, '').split('');
  const [ left, right ] = arr
    .reduce((acc,curr) => {
      acc[0] += { w: 4, p: 3, b: 2, s: 1 }[curr] || 0;
      acc[1] += { m: 4, q: 3, d: 2, z: 1 }[curr] || 0;
      return acc;
    }, [ 0, 0 ]);
  
  return left > right ? 'Left side wins!' : right > left ? 'Right side wins!' : 'Let\'s fight again!';
 
 
 
 
 const alphabetWar = fight =>
  (val => !val ? `Let's fight again!` : `${val < 0 ? `Lef` : `Righ`}t side wins!`)
  ([...fight.replace(/\w?\*\w?/g, ``)].reduce((pre, val) => pre + ({'w': -4, 'p' : -3, 'b': -2, s: -1, 'm': 4, 'q': 3, 'd': 2, 'z': 1}[val] || 0), 0));
}
