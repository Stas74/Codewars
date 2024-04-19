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




const word = n => ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][n];

const nBottles = n => word(n) + ` green bottle${n === 1 ? '' : 's'}`;

const titleCase = word => word[0].toUpperCase() + word.slice(1);

const range = n => [...Array(n).keys()].map(x => x + 1).reverse();

const refrain = n => {
  const bottles = nBottles(n);
  return [
    `${titleCase(bottles)} hanging on the wall,\n`,
    `${titleCase(bottles)} hanging on the wall,\n`,
    `${n === 1 ? 'If that' : 'And if'} one green bottle should accidentally fall,\n`,
    `There'll be ${nBottles(n - 1)} hanging on the wall.\n`,
  ].join('');
}

const tenGreenBottles = n => range(n).map(refrain).join('\n');





// recursion

{
  const num = 'no One Two Three Four Five Six Seven Eight Nine Ten'.split` `
  const ending = n => n == 1 ? '' : 's'
  const versus = n => 
`${num[n]} green bottle${ending(n)} hanging on the wall,
${num[n]} green bottle${ending(n)} hanging on the wall,
${--n ? 'And if' : 'If that'} one green bottle should accidentally fall,
There'll be ${num[n].toLowerCase``} green bottle${ending(n)} hanging on the wall.\n` 
  const f =tenGreenBottles= n => n == 1 ? versus(1) : versus(n) + '\n' + f(--n)
}






const NUMS = { 0: 'no',   1: 'one', 2: 'two',   3: 'three', 4: 'four',
               5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten' };

const TEMPLATE = '##BOTTLE## hanging on the wall,\n'+
                 '##BOTTLE## hanging on the wall,\n'+
                 '##IF## ##1BOTTLE## should accidentally fall,\n'+
                 'There\'ll be ##BOTTLE-1## hanging on the wall.\n';

const makeVerse = num => TEMPLATE.replace(/##(\d?)BOTTLE(-?\d?)##/g, (_, $1, $2) => `${NUMS[N = +$1 || num + +$2]} green bottle${N === 1 ? '' : 's'}`)
                                 .replace(/##IF##/, () => num === 1 ? 'If that' : 'And if')
                                 .replace(/^./gm, ch => ch.toUpperCase());

const tenGreenBottles = n =>
  Array.from({length: n}, (_, idx) => makeVerse(n - idx)).join`\n`;






const NUMBERS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

function bottles(n) {
  return `${NUMBERS[n]} green bottle${n == 1 ? '' : 's'}`;
}

function stanza(n) {
    return `${bottles(n)} hanging on the wall,
${bottles(n)} hanging on the wall,
${n == 1 ? 'If that' : 'And if'} one green bottle should accidentally fall,
There'll be ${bottles(n-1)} hanging on the wall.
`.replace(/^./gm, s => s.toUpperCase());
}

function tenGreenBottles(n) {
    const lyrics = [];
    for (; n >= 1; n--)
        lyrics.push(stanza(n));
    return lyrics.join('\n');
} 




function tenGreenBottles(n) {
    let number = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]
    let text = ""
    for(let x = n; x > 0; x -= 1){
        if(x != 1){
            text += `${number[x-1]} green bottles hanging on the wall,\n${number[x-1]} green bottles hanging on the wall,\nAnd if one green bottle should accidentally fall,\nThere\'ll be ${number[x-2].toLowerCase()} green ${(number[x-2] == "One")?"bottle":"bottles"} hanging on the wall.\n\n`;
        }
        else{
            text +=`One green bottle hanging on the wall,\nOne green bottle hanging on the wall,\nIf that one green bottle should accidentally fall,\nThere'll be no green bottles hanging on the wall.\n`;
        }
    }
    return text
  } 




