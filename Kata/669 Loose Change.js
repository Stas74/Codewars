// Loose Change

/*
Welcome young Jedi! 
In this Kata you must create a function that takes an amount of US currency in cents, 
and returns a dictionary/hash which shows the least amount of coins used to make up that amount. 
The only coin denominations considered in this exercise are: 
Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). 
Therefor the dictionary returned should contain exactly 4 key/value pairs.

Notes:

- If the function is passed either 0 or a negative number, 
the function should return the dictionary with all values equal to 0.
- If a float is passed into the function, its value should be rounded down, 
and the resulting dictionary should never contain fractions of a coin.

Examples
loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢)
*/

function looseChange(cents) {
  const finObj = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents < 0) {
    return finObj;
  }
  finObj["Quarters"] = Math.floor(cents / 25);
  cents = cents % 25;
  finObj["Dimes"] = Math.floor(cents / 10);
  cents = cents % 10;
  finObj["Nickels"] = Math.floor(cents / 5);
  cents = cents % 5;
  finObj["Pennies"] = Math.floor(cents / 1);
  return finObj;
}

console.log(looseChange(56)); // {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
console.log(looseChange(100)); // {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 4}



function looseChange(cents) {
  var a = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if (cents <= 0) return a;
  a.Quarters = Math.floor(cents / 25);
  a.Dimes = Math.floor((cents % 25) / 10);
  a.Nickels = Math.floor(((cents % 25) % 10) / 5);
  a.Pennies = Math.floor(((cents % 25) % 10) % 5);
  return a;
}



const looseChange = (cents) => (
  cents = Math.max(cents, 0),
  {
    Quarters: cents / 25 | 0,
    Dimes: cents % 25 / 10 | 0,
    Nickels: cents % 25 % 10 / 5 | 0,
    Pennies: cents % 5 | 0
})



const looseChange = cents =>
  (val => ({Quarters: val / 25 ^ 0, Dimes: val % 25 / 10 ^ 0, Nickels: val % 25 % 10 / 5 ^ 0, Pennies: val % 5 ^ 0}))
  (Math.max(cents, 0));




const looseChange = cents => {
    let obj = {'Quarters': 0,
               'Dimes': 0,
               'Nickels': 0,
               'Pennies': 0},
        val = [25, 10, 5, 1],
        i = 0;
    if (cents <= 0) return obj;
    for (let coin in obj) {
        obj[coin] = cents / val[i] | 0;
        cents -= obj[coin] * val[i];
        i++;
    }
    return obj;
}

