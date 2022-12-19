// Mr. Freeze

/*
There is an object/class already created called MrFreeze. 
Mark this object as frozen so that no other changes can be made to it.
*/

const MrFreeze = { speak: (speak) => "hi" };

Object.freeze(MrFreeze);

console.log(MrFreeze.speak()); // "hi"
console.log(Object.isFrozen(MrFreeze)); // true
