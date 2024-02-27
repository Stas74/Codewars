// Shifty Closures

/*
Functional closures can get overly attached. Set them straight!

Why doesn't greetAbe() actually greet Abe?

let name = 'Abe'

const greetAbe = () => 'Hello, ' + name + '!'

name = 'Ben'

const greetBen = () => 'Hello, ' + name + '!'
*/

let name = 'Abe';

const greetAbe = () => 'Hello, ' + name + '!';

let name2 = 'Ben';

const greetBen = () => 'Hello, ' + name2 + '!';

console.log(greetAbe()); // 'Hello, Abe!'
console.log(greetBen()); // 'Hello, Ben!'
