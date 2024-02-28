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
