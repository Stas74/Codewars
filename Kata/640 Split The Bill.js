// Split The Bill

/*
You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. 
Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!

The function should take one parameter: an object/dict with two or more name-value pairs that represent 
the members of the group and the amount spent by each.

Your function should return an object/dict with the same names, showing how much money the members should pay or receive.

Further points:

- The values should be positive numbers if the person should receive money from the group, 
negative numbers if they owe money to the group.

- If value is a decimal, round to two decimal places.

Example

3 friends go out together: A spends £20, B spends £15, and C spends £10. 
The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
    A: 20, 
    B: 15, 
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}
*/

function splitTheBill(x) {
  const arrSum = Object.values(x).reduce((prev, cur) => prev + cur, 0);
  const avgPay = +(arrSum / Object.values(x).length).toFixed(2);
  for (const key in x) {
    x[key] = +(x[key] - avgPay).toFixed(2);
  }
  return x;
}

console.log(splitTheBill({ A: 20, B: 15, C: 10 })); // {A: 5, B: 0, C: -5}
console.log(splitTheBill({ A: 40, B: 25, X: 10 })); // {A: 15, B: 0, X: -15}
console.log(splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 })); // { A: -17.2, B: -32.2, C: -47.2, D: 95.8, E: 0.8 }




const splitTheBill = x => {
  let vals = Object.values(x),
      avg  = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce((y, v) => (y[v] = +(x[v] - avg).toFixed(2), y), {});
}



function splitTheBill(x) {
  // Instantiate a blank object to return
  let finalObject = {};
  // Figure out how many people there are in the group
  const totalNumberOfPeople = Object.keys(x).length;
  // Figure out the total cost of everyones payments together
  const totalCost = Object.values(x).reduce((sum, b) => sum + b, 0)
  // Split the bill equally to figure out how much people paid before being owed / owing.
  const valuePerPerson = totalCost / totalNumberOfPeople;
  // minus the value per person const from the amount each person spent so that we can see if they spent more or less than the value intended
  // and put that in the object with their name key
  const finalAmounts = Object.entries(x).forEach(([person, value]) => {
    const amountOwed = value - valuePerPerson;
    finalObject[person] = Math.round(amountOwed * 100) / 100;
  })
  return finalObject;
}



