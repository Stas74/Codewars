// Alan Partridge II - Apple Turnover

/*
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, 
else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).
*/


function apple(x){
  return (+x) ** 2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

console.log(apple('50'))  // "It's hotter than the sun!!"
console.log(apple(4))  // "Help yourself to a honeycomb Yorkie for the glovebox."



function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}


const apple = x => x > 31 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
