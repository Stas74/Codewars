// Who is the killer?

/*
Some people have been killed!
You have managed to narrow the suspects down to just a few. 
Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day 
which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
*/

function killer(suspectInfo, dead) {
  for (const key in suspectInfo) {
    // Check all dead array elements includes suspectInfo array and sum true result
    if (
      dead
        .map((el) => suspectInfo[key].includes(el))
        .reduce((p, c) => p + (c == true ? 1 : 0), 0) == dead.length
    ) {
      return key;
    }
  }
}

const listObj = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

console.log(killer(listObj, ["Lucas", "Bill"])); // 'James'
