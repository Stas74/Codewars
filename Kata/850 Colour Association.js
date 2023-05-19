// Colour Association

/*

Colour plays an important role in our lifes. Most of us like this colour better then another. 
User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. 
The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

*/

function colourAssociation(array) {
  return array.map(el => ({[el[0]]:el[1]}));
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]])); 
// [{white:"goodness"},{blue:"tranquility"}]
console.log(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]])); 
// [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]




const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))



function colourAssociation(array){
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    let newObj = {};
    let key = array[i][0];
    let value = array[i][1];
    newObj[key] = value;
    newArr.push(newObj);
  }
  return newArr;
}



const colourAssociation = array =>
  array.map(([color, association]) => ({[color]: association}));



const colourAssociation = (array) => array.map(value => Object.fromEntries([value]));
