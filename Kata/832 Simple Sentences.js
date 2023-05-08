// Simple Sentences

/*

Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:

words;
commas in the middle;
multiple periods at the end.
Sentence making rules:

there must always be a space between words;
there must not be a space between a comma and word on the left;
there must always be one and only one period at the end of a sentence.
Example:

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'

*/

function makeSentence(parts) {
  let finStr = "";
  finStr += parts[0];
  for (let i = 1; i < parts.length; i++) {
    if (parts[i] == ".") {
      return finStr + ".";
    }
    if (parts[i] == ",") {
      finStr += parts[i];
    } else {
      finStr += " " + parts[i];
    }
  }
  return finStr + ".";
}

console.log(makeSentence(["hello", "world"])); // 'hello world.'
console.log(makeSentence(["hello", ",", "my", "dear"])); // 'hello, my dear.'



function makeSentence(parts) {
  return parts.reduce(function(a,b){
    return b === ","? a + b : b === "."? a + "" : a + " " + b;
  }) + ".";
}


function makeSentence(parts) {
	return (parts.join(' ') + '.').replace(/ \./g, '.').replace(/ ,/g, ',').replace(/\.+$/, '.');
}



function makeSentence(parts) {
    let spaceNearComma = /\s+(?=,)/g,
        spaceNearPeriod = /\s+(?=\.)/g,
        endPeriods = /\.*$/;

    return parts.join(" ").replace(spaceNearComma, "").replace(spaceNearPeriod, "").replace(endPeriods, ".");
}



makeSentence=a=>a.join` `.replace(/ +(?=,)|[ .]+$/g,'')+'.';

const makeSentence=c=>c.join(' ').replace(/(?<=\w) (?=\W)|[.\s]+$/g,'')+'.'

const makeSentence = parts =>
  parts.concat(`.`).join(` `).replace(/ ([,.])/g, `$1`).replace(/\.+/, `.`);
