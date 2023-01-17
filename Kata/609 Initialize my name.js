// Initialize my name

/*
Some people just have a first name; 
some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name) {
  let arrName = name.split(" ");
  if (arrName.length > 2) {
    arrName = arrName.map((el, index) => index == 0 || index == arrName.length - 1 ? el : el[0] + ".");
  }
  return arrName.join(" ");
}

console.log(initializeNames("Jack Ryan")); // 'Jack Ryan'
console.log(initializeNames("Lois Mary Lane")); // 'Lois M. Lane'
console.log(initializeNames('Alice Betty Catherine Davis')); // 'Alice B. C. Davis'



function initializeNames(name){
  return name.split(' ').map((e,i,a) => i == 0 || i == a.length-1 ? e : e[0]+'.').join(' ');
}


function initializeNames(name) {
  var n = name.split(" ");
  if (n.length < 3) return name;
  for (i = 1; i < n.length - 1; i++) {
    n[i] = n[i][0] + ".";
  }
  return n.join(" ");
}


const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')


const initializeNames = name =>
  name.replace(/(?<=\s)(\w)\w+(?=\s)/g, `$1.`);

