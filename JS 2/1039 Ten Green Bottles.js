// Ten Green Bottles

/*
Who knows the nursery rhyme Ten Green Bottles?

Lyrics:

Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall. 

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.

Task
Write some amazing code to reproduce the above lyrics starting from n green bottles!

- parameter n is 1 to 10
- newline terminates every line (including the last)
- don't forget the blank lines between the verses
*/

function tenGreenBottles(n) {

  const countArr = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
  ];

  const lastPart = "One green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere'll be no green bottles hanging on the wall.";

  const finArr = [lastPart];
  for (let i = 1; i < n; i++) {
    let partSong = `${countArr[i]} green bottles hanging on the wall,\n${countArr[i]} green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere'll be ${countArr[i - 1][0].toLowerCase() + countArr[i - 1].slice(1)} green bottle${i == 1 ? "" : "s"} hanging on the wall.`;
    finArr.unshift(partSong + "\n");
  }

  return finArr.join("\n") + "\n";
}

console.log(tenGreenBottles(2)); //
/*
    "Two green bottles hanging on the wall,\n"+
    "Two green bottles hanging on the wall,\n"+
    "And if one green bottle should accidentally fall,\n"+
    "There'll be one green bottle hanging on the wall.\n"+
    "\n"+
    "One green bottle hanging on the wall,\n"+
    "One green bottle hanging on the wall,\n"+
    "If that one green bottle should accidentally fall,\n"+
    "There'll be no green bottles hanging on the wall.\n";
*/
console.log(tenGreenBottles(6));
console.log(tenGreenBottles(1));
