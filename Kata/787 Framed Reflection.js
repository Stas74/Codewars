// Framed Reflection

/*

You are given a message (text) that you choose to read in a mirror (weirdo). 
Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

'*********\n* olleH *\n* dlroW *\n*********'

Words in your solution should be left-aligned.

*/

function mirror(text) {
  let revStrArr = text.split(" ").map((el) => el.split("").reverse().join(""));
  let maxLen = Math.max(...revStrArr.map((el) => el.length));
  let starsStr = "*".repeat(maxLen + 4);
  revStrArr = revStrArr.map((el) =>
    el.length < maxLen ? "* " + el.padEnd(maxLen) + " *" : "* " + el + " *"
  );
  revStrArr.push(starsStr);
  revStrArr.unshift(starsStr);
  return revStrArr.join("\n");
}

console.log(mirror("Hello World")); // '*********\n* olleH *\n* dlroW *\n*********'
console.log(mirror("Codewars")); // '************\n* srawedoC *\n************'
console.log(mirror("Hellooo World")); // '*********\n* olleH *\n* dlroW *\n*********'




function mirror(s) {
  let a = s.split(" ");
  let m = Math.max(...a.map((x) => x.length));
  a = a.map(
    (x) => "* " + [...x].reverse().join("") + " ".repeat(m - x.length) + " *"
  );
  return ["*".repeat(m + 4), ...a, "*".repeat(m + 4)].join("\n");
}



function mirror(text) {
  const words = text.split(' ');
  const width = Math.max.apply(null, words.map(w => w.length));
  const tb = '*'.repeat(width + 4);
  const revs = words.map(w => `* ${Array.from(w).reverse().join('')}${' '.repeat(width - w.length)} *`).join('\n');
  return `${tb}\n${revs}\n${tb}`;
}



mirror = (a) =>
  (([a, b]) =>
    [
      "*".repeat(4 + b),
      ...a
        .map((a) => a.split``.reverse().join``)
        .map((a) => "* " + a + " ".repeat(1 + b - a.length) + "*"),
      "*".repeat(4 + b),
    ].join`\n`)(((a) => [a, Math.max(...a.map((a) => a.length))])(a.split` `));


