// C.Wars

/*
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.

Names are separated by exactly one space in the input, without leading or trailing spaces. 
Names will always be lowercase, except optionally their first letter.

*/

function initials(n) {
  let arrName = n.split(" ");
  return arrName.map((el, i) =>
    i != arrName.length - 1
      ? el[0].toUpperCase() + "."
      : el[0].toUpperCase() + el.slice(1)
  ).join("");
}

console.log(initials("code wars")); // 'C.Wars'
console.log(initials("Barack hussain obama")); // 'B.H.Obama'




function initials(n) {
  return n.split(' ').map((v, i, a) => v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')).join('');
}


initials = n =>
  (n = n.split(' ')).map(w => w[0].toUpperCase()).join('.') + n.pop().slice(1);


const initials = str => str
  .replace(/\b\w/ig, m => m.toUpperCase())
  .replace(/\w+\s/ig, m => m[0] + '.');



const initials = n =>
  n.replace(/\b\w/g, val => val.toUpperCase())
    .replace(/\b(\w)\w* /g, `$1.`);



