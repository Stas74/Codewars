// Alan Partridge III - London

/*
Ever the learned traveller, Alan Partridge has pretty strong views on London:

"Go to London. I guarantee you'll either be mugged or not appreciated.
Catch the train to London, stopping at Rejection, Disappointment, Backstabbing Central and Shattered Dreams Parkway."
Task
Your job is to check that the provided list / array of stations contains all of the stops Alan mentions. 
The list of stops are as follows:

Rejection
Disappointment
Backstabbing Central
Shattered Dreams Parkway

If all the stops appear in the given list / array, return 
Smell my cheese you mother!, 
if not, return 
No, seriously, run. You will miss it.
*/

function alan(x) {
  const list = [
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
  ];
  return list.map((el) => x.includes(el)).includes(false)
    ? "No, seriously, run. You will miss it."
    : "Smell my cheese you mother!";
}

console.log(alan(["London", "Norwich"])); // 'No, seriously, run. You will miss it.'
console.log(
  alan([
    "Norwich",
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
    "London",
  ])
);
// 'Smell my cheese you mother!'





function alan(x){
  return ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'].every(e => x.indexOf(e) != -1) 
  ? 'Smell my cheese you mother!' 
  : 'No, seriously, run. You will miss it.';  
}



const alan = (arr) => 
          ['Rejection', 'Disappointment', 'Backstabbing Central', 
           'Shattered Dreams Parkway'].every(el => arr.includes(el)) ?
          'Smell my cheese you mother!' : 'No, seriously, run. You will miss it.'



function alan(x){
  if (x.includes('Rejection') && x.includes('Disappointment') && x.includes('Backstabbing Central') && x.includes('Shattered Dreams Parkway')) {
    return 'Smell my cheese you mother!'
  }
  return 'No, seriously, run. You will miss it.'
}



const alan = x =>
  [`Rejection`, `Disappointment`, `Backstabbing Central`, `Shattered Dreams Parkway`].every(val => x.includes(val)) ?
    `Smell my cheese you mother!` : `No, seriously, run. You will miss it.`;




function alan(x) {  
  let stations = new Set([ 
    'Rejection', 
    'Disappointment', 
    'Backstabbing Central', 
    'Shattered Dreams Parkway'
  ]);  
  
  for (let stop of x)
    stations.delete(stop);  
  
  return stations.size
    ? 'No, seriously, run. You will miss it.'
    : 'Smell my cheese you mother!';  
}



