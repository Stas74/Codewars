// Sort My Textbooks

/*
HELP! 
Jason can't find his textbook! 
It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list 
(ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/

function sorter(textbooks) {
  return textbooks.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0
  );
}
// return textbooks.sort((a,b) => a.localeCompare(b));

console.log(sorter(["Algebra", "History", "Geometry", "English"])); // ['Algebra', 'English', 'Geometry', 'History']
console.log(sorter(["Algebra", "history", "Geometry", "english"])); // ['Algebra', 'english', 'Geometry', 'history']



function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                  a.toLowerCase() < b.toLowerCase() ? -1  : 0)
}



function sorter(textbooks) {
  return [...textbooks].sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return (a > b) - (a < b);
  });
}



const sorter = (textbooks) => textbooks
  .sort((a, b) => {
    const aa = a.toLowerCase()
    const bb = b.toLowerCase()
    if (aa > bb) return 1
    if (aa < bb) return -1
    return 0
  });



function sorter(arr) {
  return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}




