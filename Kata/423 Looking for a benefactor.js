// Looking for a benefactor

/*
The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. 
The association is funded through financial donations from generous benefactors. 
John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] 
He wants to know how much the next benefactor should give to the association 
so that the average of the first n + 1 donations should reach an average of 30. 
After doing the math he found 149. He thinks that he could have made a mistake.

91
if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

Could you help him?

Task
The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) 
that will permit to reach the average navg.

Should the last donation be a non positive number (<= 0) John wants us:

to return:

Nothing in Haskell, Elm
None in F#, Ocaml, Rust, Scala
-1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
or to throw an error (some examples for such a case):

IllegalArgumentException() in Clojure, Java
ArgumentException() in C#
echo ERROR in Shell
argument-error in Racket
std::invalid_argument in C++
ValueError in Python
So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

Notes:
all donations and navg are numbers (integers or floats), arr can be empty.
See examples below and "Sample Tests" to see which return is to be done.
new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
or return `-1` or ERROR or Nothing or None depending on the language.
*/

function newAvg(arr, newavg) {
  let finDonation = newavg * (arr.length + 1) - arr.reduce((prev, cur) => prev + cur, 0);
  if (finDonation <= 0) throw "'Expected New Average is too low'";
  return Math.ceil(finDonation);
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90)); // 628
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92)); // 645
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2)); // "Expected New Average is too low"





function newAvg(arr, newavg) {
  let out = 0;
  if ( arr.length !== 0 ){
    let temp = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
    out = Math.ceil(temp)
  } else {
    out = newavg
  }
  return out <= 0 ? error : out;
}



function newAvg(arr, newavg) {
    var sm = arr === [] ? 0 : arr.reduce(function(a, b) { return a + b; }, 0);
    var add = (arr.length + 1) * newavg - sm;
    if (add > 0)
        return Math.ceil(add);
    throw new RangeError("Expected New Average is too low"); 
}
