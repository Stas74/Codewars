// Name Shuffler

/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}


console.log(nameShuffler('john McClane'))  // 'McClane john'
console.log(nameShuffler('tom jerry'))  // 'jerry tom'




function nameSuffle(str){
  var arr = str.split(" ");
  return arr[1] + ' ' + arr[0]
}

const nameShuffler = str =>
  str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);
