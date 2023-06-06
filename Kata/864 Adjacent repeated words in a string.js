// Adjacent repeated words in a string

/*
You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? 
For example, you've been distracted for a second. 
Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, 
like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). 
The occurence of two or more equal words next after each other counts as one.

Examples
"dog cat"                  -->  0
"dog DOG cat"              -->  1
"apple dog cat"            -->  0
"pineapple apple dog cat"  -->  0
"apple apple dog cat"      -->  1
"apple dog apple dog cat"  -->  0
"dog dog DOG dog dog dog"  -->  1
"dog dog dog dog cat cat"  -->  2
"cat cat dog dog cat cat"  -->  3
*/

function countAdjacentPairs(searchString) {
  const words = searchString.toLowerCase().split(' ');
  let count = 0;

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i] === words[i + 1]) {
      count++;
      while (i < words.length - 1 && words[i] === words[i + 1]) {
        i++;
      }
    }
  }

  return count;
}

console.log(countAdjacentPairs("orange Orange kiwi pineapple apple")); // 1
console.log(countAdjacentPairs("banana banana banana")); // 1
console.log(countAdjacentPairs("banana banana banana terracotta banana terracotta terracotta pie!")); // 2
