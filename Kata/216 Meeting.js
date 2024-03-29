// Meeting

/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

- makes this string uppercase
- gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. 
Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.
*/

function meeting(s) {
  let arr = []
  s.toUpperCase().split(";").forEach(element => {    
    arr.push(element.split(":").reverse().join(", "))
  });
  return `(${arr.sort().join(")(")})`
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")); 
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"



const meeting = s => {
  return s.toUpperCase()
         .replace(/(\w+):(\w+)/g, "($2, $1)")
         .split(';')
         .sort()
         .join('')
};



function meeting(s) {
    return s.split(';').map(i => i.toUpperCase().split(':').reverse().join(', ')).sort().map(i => '(' + i + ')').join('')
}



function meeting(s) {
  let string = s.toUpperCase().split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(')
  return '(' + string + ')'
}
