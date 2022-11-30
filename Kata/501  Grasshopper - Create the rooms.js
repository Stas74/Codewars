// Grasshopper - Create the rooms

/*
Escape the room
You are creating an "Escape the room" game. 
The first step is to create a hash table called rooms that contains all of the rooms of the game. 
There should be at least 3 rooms inside it, each being a hash table with at least three properties 
(e.g. name, description, completed).
*/

// Add rooms here
var rooms = {
  "Kitchen": {name:"Kitchen", description:"Room for beginners", completed:"Yes"},
  "Hall": {name:"Hall", description:"Feel the fear", completed:"No"},  
  "Bedroom": {name:"Bedroom", description:"Nightmares", completed:"No"},  
};



const rooms = {
  bedroom: {
    name: 'Bedroom',
    description: 'For... sleeping',
    completed: true,
  },
  bathroom: {
    name: 'Bathroom',
    description: 'This will get you clean',
    completed: false,
  },
  kitchen: {
    name: 'Kitchen',
    description: 'Hungry? Why wait?',
    completed: true,
  },
}



class Room  {
  constructor() {
    this.name = '';
    this.description = '';
    this.completed= '';
  }
}
var rooms = {
  bedroom : new Room(),
  kitchen : new Room(),
  bathroom : new Room(),
}



// Add rooms here
var rooms = {}
for (var i = 0; i < 3; i++) {
    rooms[`room${i}`] = {'a': 1, 'b': 2, 'c': 3}
}

