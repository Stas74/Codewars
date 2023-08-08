// SantaClausable Interface

/*
You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. 
There is only a concept of inheritance, but you can't assume that a certain method or property exists, 
just because it exists in the parent prototype / class. 
We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. 
We need to implement a method which checks for this interface.

Rules
The SantaClausable interface is implemented, if all of the following methods are defined on an object:

sayHoHoHo() / say_ho_ho_ho
distributeGifts() / distribute_gifts
goDownTheChimney() / go_down_the_chimney

Example

var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
*/

var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!') },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
  sayHoHoHo: function() { console.log('Oink Oink!') }
  // no distributeGifts() and no goDownTheChimney()
};

function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
    return typeof obj[methodName] == 'function';
  });
}

console.log(isSantaClausable(santa)); // true
console.log(isSantaClausable(notSanta)); // false




function isSantaClausable(obj) {
  return 'function' == typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);
}



function isSantaClausable(obj) {
  return 'function' == typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);
}



function isSantaClausable(obj) {
 /*return (
 obj.hasOwnProperty('sayHoHoHo') && 
 obj.hasOwnProperty('distributeGifts') && 
 obj.hasOwnProperty('goDownTheChimney')
   );*/
   return (
   (typeof obj.sayHoHoHo==='function')
   &&(typeof obj.distributeGifts=== 'function')
   &&(typeof obj.goDownTheChimney==='function')
   );
}



function isSantaClausable(obj) {
  if(typeof obj.sayHoHoHo !== 'function' ) return false;
  if(typeof obj.distributeGifts !== 'function') return false;
  if(typeof obj.goDownTheChimney !== 'function') return false;
  else return true;
}



const isSantaClausable = obj =>
[`sayHoHoHo`, `distributeGifts`, `goDownTheChimney`].every(val => typeof obj[val] === `function`);



const isSantaClausable = o => typeof (o.sayHoHoHo && o.distributeGifts && o.goDownTheChimney) === 'function';
