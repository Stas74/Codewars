// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form.
// For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.



function expandedForm(num) {
  let final = [];
  num = String(num).split("").reverse();
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== "0") {
      final.push(num[i] * 10 ** i);
    }
  }
  return final.reverse().join(" + ");
}

console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'





const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");


expandedForm = n => [...String(n)].reverse().map((x,i) => x == '0' ? '' : x + '0'.repeat(i)).filter(x => x != '').reverse().join(' + ')
