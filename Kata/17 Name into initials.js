// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  // code away
  // let nameArr = name.split(' ');
  // console.log(nameArr);
  // console.log((nameArr[0])[0].toUpperCase());
  // console.log((nameArr[0])[0].toUpperCase() + '.' + (nameArr[1])[0].toUpperCase());
  let nameArr = name.split(' ');  
  return nameArr[0][0].toUpperCase() + '.' + nameArr[1][0].toUpperCase();
}

console.log(abbrevName("sam Harris")) // "S.H"
console.log(abbrevName("Patrick Feenan")) // "P.F"



function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}



function abbrevName(name){
  if (typeof name === 'string') {
    let names = name.split(' ');
    return `${names[0][0]}.${names[1][0]}`.toUpperCase();
  }
  console.log(arguments.callee.name + ': Argument must be string!');
}
