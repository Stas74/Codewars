// New Cashier Does Not Know About Space or Shift

/*
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/

const menu = {
  Burger: 0,
  Fries: 0,
  Chicken: 0,
  Pizza: 0,
  Sandwich: 0,
  Onionrings: 0,
  Milkshake: 0,
  Coke: 0,
};

function getOrder(input) {
  let finArr = [];
  for (const item in menu) {
    menu[item] = input.split(item.toLowerCase()).length - 1;  
    finArr.push((item + " ").repeat(menu[item]))
  }
  return finArr.join('').trim();
}

console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
);
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"




const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1);
const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);

function getOrder(input) {
  return input.match(new RegExp(menu.join("|"), "ig")).map(capitalize).sort(comparator).join(" ");
}



const MENU = {
  Burger:     1,
  Fries:      2,
  Chicken:    3,
  Pizza:      4,
  Sandwich:   5,
  Onionrings: 6,
  Milkshake:  7,
  Coke:       8,
};
const REG_CMD = new RegExp(Object.keys(MENU).join('|'), 'gi');

function getOrder(cmd) {
  return cmd.match(REG_CMD)
            .map(s=>s.charAt(0).toUpperCase()+s.slice(1))
            .sort((x,y)=>MENU[x]-MENU[y])
            .join(' ');
}



function getOrder(input) {
  let menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  let result = '';

  menu.forEach(item => {
    result += (item + ' ').repeat((input.match(new RegExp(item, 'gi')) || []).length);
  });
  return result.trim();
}


getOrder = a => ['burger','fries','chicken','pizza','sandwich','onionrings','milkshake','coke'].map(e=>(e+' ')
                 .repeat(a.split(e).length-1)).join``.split` `.map(e=>e[0]?e[0].toUpperCase()+e.slice(1):'').join` `.trim()



const getOrder = input =>
  [`burger`, `fries`, `chicken`, `pizza`, `sandwich`, `onionrings`, `milkshake`, `coke`]
    .reduce((pre, val) => [...pre, ...input.match(new RegExp(val, `g`)) || []], [])
    .map(val => val[0].toUpperCase() + val.slice(1)).join(` `);
