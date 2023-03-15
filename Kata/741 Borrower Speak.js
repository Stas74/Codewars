// Borrower Speak

/*
The borrowers are tiny tiny fictional people. 
As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

As a result, the borrowers talk very very quietly. 
They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

The young borrowers have begged their parents to stop using caps and punctuation.

Change the input text s to new borrower speak. Help save the next generation!
*/

function borrow(s) {
  return s.replace(/[^a-z]/gi, "").toLowerCase();
}

console.log(borrow("WhAt! FiCK! DaMn CAke?")); // "whatfickdamncake"
console.log(borrow("THE big PeOpLE Here!!")); // "thebigpeoplehere"
console.log(borrow("i AM a TINY BoY!!")); // "iamatinyboy"



const borrow = s => s.toLowerCase().replace(/\W/g,'');


function borrow(s){
  return s.replace(/[^\w]/g, '').toLowerCase();
}



function borrow(s){
  const isChar = c => c.toLowerCase() !== c.toUpperCase()
  return [...s.toLowerCase()].filter(c => isChar(c) && c.toLowerCase() === c).join('')
}


const borrow = (s) => {
  return s.toLowerCase().replaceAll(/[.\s,\/#!?$%\^&\*;:{}=\-_`~()]/g, '');
}



