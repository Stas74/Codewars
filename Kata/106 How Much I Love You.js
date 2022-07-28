// I love you, a little , a lot, passionately ... not at all

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals,
// saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower
// of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
  const phrases = [
    "empty",
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  // return nbPetals > 6 ? phrases[nbPetals % 6] : phrases[nbPetals];
  return nbPetals % 6 === 0 ? phrases[6] : phrases[nbPetals % 6];
}

console.log(howMuchILoveYou(7)); // "I love you"
console.log(howMuchILoveYou(3)); //"a lot"
console.log(howMuchILoveYou(6)); // "not at all"
console.log(howMuchILoveYou(248)); // 'a little'
console.log(howMuchILoveYou(444)); // 'not at all'
