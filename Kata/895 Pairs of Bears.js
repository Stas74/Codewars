// Pairs of Bears

/*
In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that 
it has x number of mating pairs of bears.

Task:
You must check within a string (s) to find all of the mating pairs, 
returning a list/array of the string containing valid mating pairs and a boolean 
indicating whether the total number of bears is greater than or equal to x.

Rules for a 'valid' mating pair:
Bears are either 'B' (male) or '8' (female),
Bears must be together in male/female pairs 'B8' or '8B',
Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
Return an array containing a string of the valid mating pairs available (empty string if there are no pairs), 
and a boolean indicating whether the total number of bears is greater than or equal to x. , e.g:

(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false]; in this example, the number of bears(=4) is lesser than the given 
value of x(=6)
*/

function bears(x, s) {
  let count = 0;
  let prev = false;
  let finStr = "";
  for (let i = 0; i < s.length; i++) {
    let letters = s[i] + s[i + 1];
    if ((letters == "B8" || letters == "8B") && prev == false) {
      finStr += letters;
      prev = true;
      count++;
    } else {
      prev = false;
    }
  }
  return [finStr, count >= x];
}
// let strReplaced = s.replace(/[^8B]/g, "");

console.log(bears(7, "8j8mBliB8gimjB8B8jlB")); // ["B8B8B8",false]
console.log(bears(3, "88Bifk8hB8BB8BBBB888chl8BhBfd")); // ["8BB8B8B88B",true]
console.log(bears(8, "8")); // ["",false]
