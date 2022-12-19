// Hells Kitchen

/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', 
Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

function gordon(a) {
  let finStr = a
    .replace(/[eiou]/gi, "*")
    .replace(/a/gi, "@")
    .toUpperCase();
  return finStr
    .split(" ")
    .map((el) => el + "!!!!")
    .join(" ");
}

console.log(gordon("What feck damn cake")); // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
console.log(gordon("are you stu pid")); // '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
console.log(gordon("i am a chef")); // '*!!!! @M!!!! @!!!! CH*F!!!!'
