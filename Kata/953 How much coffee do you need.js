// How much coffee do you need?

/*
Everybody know that you passed to much time awake during night time...

Your task here is to define how much coffee you need to stay awake after your night. 
You will have to complete a function that take an array of events in arguments, 
according to this list you will return the number of coffee you need to stay awake during day time. 
Note: If the count exceed 3 please return 'You need extra sleep'.

The list of events can contain the following:

You come here, to solve some kata ('cw').

You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').

You just watch a movie ('movie').

Other events can be present and it will be represent by arbitrary string, just ignore this one.

Each event can be downcase/lowercase, or uppercase. 
If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.

*/

function howMuchCoffee(events) {
  let totalCoffee = 0;
  events.map((el) =>
    (/cw/.test(el) && el.length == 2) ||
    (/dog/.test(el) && el.length == 3) ||
    (/cat/.test(el) && el.length == 3) ||
    (/movie/.test(el) && el.length == 5)
      ? (totalCoffee += 1)
      : (/cw/i.test(el) && el.length == 2) ||
        (/dog/i.test(el) && el.length == 3) ||
        (/cat/i.test(el) && el.length == 3) ||
        (/movie/i.test(el) && el.length == 5)
      ? (totalCoffee += 2)
      : (totalCoffee += 0)
  );
  return totalCoffee < 4 ? totalCoffee : 'You need extra sleep';
}

console.log(howMuchCoffee([])); // 0
console.log(howMuchCoffee(["cw"])); // 1
console.log(howMuchCoffee(["CW"])); // 2
console.log(howMuchCoffee(["cw", "CAT"])); // 3
console.log(howMuchCoffee(["cw", "CAT", "DOG"])); // 'You need extra sleep'
console.log(howMuchCoffee(["cw", "CAT", "cw=others"])); // 3
