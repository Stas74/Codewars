// All Inclusive?

/*
Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true
*/

function containAllRots(strng, arr) {
  for (let index = 0; index < strng.length; index++) {
    if (arr.indexOf(strng.slice(index) + strng.slice(0, index)) == -1) {
      return false;
    }
  }
  return true;
}

console.log(
  containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
); // true
console.log(
  containAllRots("XjYABhR", [
    "TzYxlgfnhf",
    "yqVAuoLjMLy",
    "BhRXjYA",
    "YABhRXj",
    "hRXjYAB",
    "jYABhRX",
    "XjYABhR",
    "ABhRXjY",
  ])
); // false



function containAllRots(strng, arr) {
    return [...strng].map((_,i) => strng.substr(i)+strng.slice(0,i)).every(x => arr.includes(x));
}



containAllRots = (s, a) => Array.from(s).map((e, i) => s.slice(i) + s.slice(0, i)).every(e => a.includes(e));


