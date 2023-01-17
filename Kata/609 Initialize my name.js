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
