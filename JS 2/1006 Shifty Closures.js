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




var name;
function greet_abe() {
  name = 'Abe';
  return "Hello, " + name + '!';
};


function greet_ben() {
  name = 'Ben'; 
  return "Hello, " + name + '!';
};




var greet_abe = greet('Abe');
var greet_ben = greet('Ben');

function greet(name) {
  return function() {
    return "Hello, " + name + '!';
  };
}




const greet_abe = () => 'Hello, Abe!';
const greet_ben = () => 'Hello, Ben!';




const greet = name =>
  () => `Hello, ${name}!`;
const greet_abe = greet(`Abe`);
const greet_ben = greet(`Ben`);





const arr = ['Abe', 'Ben']

const greet_abe = function() {
  return "Hello, " + arr[0] + '!';
};

const greet_ben = function() {
  return "Hello, " + arr[1] + '!';
};
