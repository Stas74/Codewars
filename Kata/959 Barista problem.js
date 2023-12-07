// Barista problem

/*
You are a barista at a big cafeteria. 
Normally there are a lot of baristas, but your boss runs a contest and he told you that, 
if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times 
of the customers is the smallest possible, he will give you a substantial raise.

So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
People start giving you their orders.
Let's not think about the time you need to write down their orders, 
but you need 2 additional minutes to clean the coffee machine after each coffee you make.

Now you have a list coffees of the orders and you write down next to each of the orders the time you need 
to brew each one of those cups of coffee.

Task:

Given a list of the times you need to brew each coffee, return the minimum total waiting time.
If you get it right, you will get that raise your boss promised you!

Note that:

It is possible to receive no orders. (It's a free day :), 
maybe the next day your boss will start giving you some orders himself, you probably don't want that :) )

You can only brew one coffee at a time.

Since you have one coffee machine, you have to wait for it to brew the current coffee before you can move on to the next one.

Ignore the time you need to serve the coffee and the time you need to take the orders and write down the time 
you need to make each one of them.

If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, 
the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), 
another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), 
so in total 9 minutes. 
The third customer, by the same logic, 
is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). 
This order of brewing the coffee will end up in a total waiting time of 26 minutes, 
but note that this may not be the minimum time needed. 
This time depends on the order you choose to brew the cups of coffee.

The order in which you brew the coffee is totally up to you.

[4, 3, 2]
(4) + (4 + 2 + 3) + (9 + 2 + 2)
4 + 9 + 13 = 26

(2) + (2 + 2 + 3) + (7 + 2 + 4)
2 + 7 + 13 = 22

Examples:

coffees = [3,2,5,10,9]  ->  85
coffees = [20,5]        ->  32
coffees = [4,3,2]       ->  22

*/

function barista(coffees) {
  return coffees
    .sort((a, b) => a - b)
    .reduce((prev, cur, i) => prev + (cur * (coffees.length - i) + 2 * i), 0);
}

console.log(barista([2, 10, 5, 3, 9])); // 85
console.log(barista([4, 3, 2])); // 22
console.log(barista([20, 5])); // 32




function barista(coffees){
  //TODO: Maths are cool!
  
  // 0 + 2 + 4 + 6 + 8
  // 0 + 2(1) + 2(2) + 2(3) + 2(4)
  
  var sum = 0;
  var coffees = coffees.sort(function(a, b) {return a - b;});
  console.log(coffees);
  coffees.reduce(
    (previousValue, currentValue, currentIndex) => {
      var waitTime = currentIndex < 1 ? currentValue : previousValue + currentValue + 2;
      console.log(waitTime);
      sum += waitTime;
      return waitTime;
    }, 0);
  return sum;
}



function barista(coffees){
    let cleanTime = 2
    let line = coffees.sort((a, b) => a - b)
    let time = 0
    while(line.length){
        time += line[0] * line.length
        line.shift()
        time += cleanTime * line.length
    }
    return time
  }



const barista = (arr) => 
  [...arr.sort((a, b)=> a - b)].reduce((acc, el, i, arr) => acc + (arr.slice(0, i).reduce((ac, e) => ac + e +2, 0) + el), 0)



function barista(coffees){
    coffees = coffees.sort((a, b) => a - b);
    let totalTime = 0;
    let sum = 0;
    for (let i = 0; i < coffees.length; i++) {
      sum += (i === 0) ? coffees[i] : coffees[i] + 2;
      totalTime += (i === 0) ? coffees[0] : sum;
    }
    return totalTime;
}



barista=a=>a.sort((a,b)=>a-b).reduce((a,b,c)=>c?[...a,a.slice(-1)[0]+b+2]:[b],[]).reduce((a,b)=>a+b,0)
