// Naughty or Nice?

/*
Happy Holidays fellow Code Warriors!
It's almost Christmas! That means Santa's making his list, and checking it twice. 
Unfortunately, elves accidentally mixed the Naughty and Nice list together! 
Santa needs your help to save Christmas!

Save Christmas!
Santa needs you to write two functions. Both of the functions accept a sequence of objects. 
The first one returns a sequence containing only the names of the nice people, 
and the other returns a sequence containing only the names of the naughty people. 
Return an empty sequence [] if the result from either of the functions contains no names.

The objects in the passed will represent people. Each object contains two properties: name and wasNice.
name - The name of the person
wasNice - True if the person was nice this year, false if they were naughty

Person Object Examples
{ name: 'Warrior reading this kata', wasNice: true }
{ name: 'xDranik', wasNice: false }
Test Examples
getNiceNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] )
// => returns [ 'Warrior reading this kata', 'Santa' ]

getNaughtyNames( [
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true }
] )
// => returns [ 'xDranik' ]
*/

function getNiceNames(people) {
  const finArr = [];
  for (const iterator of people) {
    if (iterator.wasNice) {
      finArr.push(iterator.name);
    }
  }
  return finArr;
}

function getNaughtyNames(people) {
  const finArr = [];
  for (const iterator of people) {
    if (!iterator.wasNice) {
      finArr.push(iterator.name);
    }
  }
  return finArr;
}

var names = [
  { name: "Warrior reading this kata", wasNice: true },
  { name: "xDranik", wasNice: false },
  { name: "Santa", wasNice: true },
];

console.log(getNiceNames(names)); // [ 'Warrior reading this kata', 'Santa' ]
console.log(getNaughtyNames(names)); // [ 'xDranik' ]



function getName(person) {
  return person.name;
}

function wasNice(person) {
  return person.wasNice;
}

function wasNaughty(person) {
  return !wasNice(person);
}

function getNiceNames(people){
  return people.filter(wasNice).map(getName);
}

function getNaughtyNames(people){
  return people.filter(wasNaughty).map(getName);
}




function getNiceNames(people){
  return people.filter(p => p.wasNice).map(p => p.name);
}

function getNaughtyNames(people){
   return people.filter(p => !p.wasNice).map(p => p.name);
}



function getNiceNames(people){
  return people.filter(function(person) {
    return person.wasNice;
  }).map(function(person) {
    return person.name;
  });
}

function getNaughtyNames(people){
  return people.filter(function(person) {
    return !person.wasNice;
  }).map(function(person) {
    return person.name;
  });
}




const getNiceNames = people =>
  people.reduce((pre, val) => val.wasNice ? [...pre, val.name] : pre, []);

const getNaughtyNames = people =>
  people.reduce((pre, val) => val.wasNice ? pre : [...pre, val.name], []);



