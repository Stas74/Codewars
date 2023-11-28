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




function howMuchCoffee(e) {
  var count=0;
  for (var i=0; i<e.length; ++i)
  {
    if (e[i]=='cw' || e[i]=='cat' || e[i]=='dog' || e[i]=='movie')
      count++;
    if (e[i]=='CW' || e[i]=='CAT' || e[i]=='DOG' || e[i]=='MOVIE')
      count+=2;  
  }
  return count>3?'You need extra sleep':count;
}



function howMuchCoffee(events) {
  var coffeeCount = 0; 
  events.forEach(function(entry) {
    var matches = /^((cw|cat|dog|movie)|(CW|CAT|DOG|MOVIE))$/.exec(entry);
    coffeeCount += matches ? (matches[2] ? 1 : (matches[3]? 2:0)):0;

  });
  return coffeeCount > 3 ? "You need extra sleep":coffeeCount;
}




function howMuchCoffee(events) {

  const lower = /^(cw|dog|cat|movie)+$/
  ,     upper = /^(CW|DOG|CAT|MOVIE)+$/
  ,    coffee = events.reduce((a, b) => a + (lower.test(b) || upper.test(b) * 2), 0);
      
  return coffee > 3 ? 'You need extra sleep' : coffee;
}




function howMuchCoffee(events) {
  var res = events.map(function(x){
    return /^(cw|dog|cat|movie)$/.test(x) ? 1 : /^(CW|DOG|CAT|MOVIE)$/.test(x) ? 2 : x;
  }).filter(x => /^[12]$/.test(x)).reduce((x,y) => x+y,0);
  return res > 3 ? 'You need extra sleep' : res;
}



function howMuchCoffee(events) {
  const validEvents = /^(cw|cat|dog|movie)$/i;
  const coffes = events.filter(val => validEvents.test(val))
    .reduce((sum, event) => sum + (event.toLowerCase() !== event ? 2 : 1), 0);
  return coffes > 3 ? 'You need extra sleep' : coffes;
}



howMuchCoffee=(a,b=a.reduce((a,b)=>a+(/^(cw|dog|cat|movie)$/.test(b)?1:/^(CW|DOG|CAT|MOVIE)$/.test(b)?2:0),0))=>b>3?'You need extra sleep':b



function howMuchCoffee(events) {
  // count the events score
  let count = events.reduce((sum,event) =>{
    if (['dog','cat','cw','movie'].includes(event)) return sum + 1;
    if (['DOG','CAT','CW','MOVIE'].includes(event)) return sum + 2;
    return sum;
  }, 0);
  // return the appropriate string
  return count > 3 ? 'You need extra sleep' : count;
}



function howMuchCoffee(events) {
  let num = events.join(' ').replace(/DOG|CAT|CW|MOVIE/g,2).replace(/DOG|CAT|CW|MOVIE/gi,1).split(' ').reduce((a,c) => a+ (+c?+c:0),0);
  return num>3? 'You need extra sleep' : num;
}
