// Adding Arrays

/*
Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]
The function should combine all the 0th indexed letters to create the word 'just', 
all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out 
(see the last element in the last element in the array).

Examples:

[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
] // => "Just Live Life Man"

[ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ]
] // => "The Mitochondria is the powerhouse of the cell"
*/

function arrAdder(arr) {
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    finArr.push(arr.map(el => el[i]).join(""));
  }
  return finArr.join(" ").trim();
}

console.log(arrAdder([
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
  ]
)); // "Just Live Life Man"


  console.log(arrAdder([
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ]
    ])); // "The Mitochondria is the powerhouse of the cell"



function arrAdder(arr) {
  var sentence = "";
  for(var i = 0; i < arr[0].length; i++){
    for(var j = 0; j < arr.length; j++){
      sentence+=arr[j][i];
    }
    sentence+=" ";
  }
  return sentence.trim();
}



function arrAdder(arr) {
  let massiv = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) massiv += arr[j][i];
    if (i < arr[0].length - 1) massiv += " ";
  }
  return massiv;
}



const arrAdder = arr =>  arr[0].map((_,i)=>  arr.map((_,j)=> arr[j][i]).join('')).join(' ');


const arrAdder = a => a[0].map((_, i) => a.map(r => r[i]).join('')).join(' ')



const arrAdder = arr =>
  arr[0].map((_, idx) => arr.reduce((pre, val) => pre + val[idx], ``)).join(` `);


const arrAdder = arr =>
{
  const words = [];
  
  for (let i = 0; i < arr[0].length; i++) {
    let word = '';
    
    for (let j = 0; j < arr.length; j++) {
      const letter = arr[j][i];
      
      if (letter !== '') {
        word += letter;
      } else {
        break;
      }
    }
    
    words.push(word);
  }
  
  return words.join(' ');
}


