// Help the Elite Squad of Brazilian forces BOPE

/*
The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. 
Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.
*/

const weapons = {
  PT92: 17,
  M4A1: 30,
  M16A2: 30,
  PSG1: 5,
};

function magNumber(info) {
  return Math.ceil(info[1] * 3 / weapons[info[0]]);
}

console.log(magNumber(["PT92", 6])); // 2
console.log(magNumber(["M4A1", 8])); // 1
console.log(magNumber(["PSG1", 31])); // 19



magNumber = info => Math.ceil(info[1] * 3 / {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5}[info[0]])


const magNumber = (info) => {
  const [gun, street] = info;
  let magzines = 0;
  switch(gun){
      case('PT92'):
      magzines = Math.ceil((street * 3) / 17);
      break;
      case('M4A1'):
      magzines = Math.ceil((street * 3) / 30);
      break;
      case('M16A2'):
      magzines = Math.ceil((street * 3) / 30);
      break;
      case('PSG1'):
      magzines = Math.ceil((street * 3) / 5);
      break;
  }
  return magzines;
}


function magNumber(info){
  const dict = new Map([
    ["PT92", 17],
    ["M4A1", 30],
    ["M16A2", 30],
    ["PSG1", 5]
  ]);
  return Math.ceil(info[1] * 3 / dict.get(info[0]));
}
