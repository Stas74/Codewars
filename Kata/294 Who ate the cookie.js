// Who ate the cookie?

/*
For this problem you must create a program that says who ate the last cookie. 

If the input is a string then "Zach" ate the cookie. 
If the input is a float or an int then "Monica" ate the cookie. 
If the input is anything else "the dog" ate the cookie. 
The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.
*/


function cookie(x){
  return `Who ate the last cookie? It was ${typeof(x) === "string" ? "Zach!" : typeof(x) === "number" ? "Monica!" : "the dog!"}`
}


console.log(cookie("Ryan"))  // "Who ate the last cookie? It was Zach!"
console.log(cookie(26))  // "Who ate the last cookie? It was Monica!"
console.log(cookie(true))  // "Who ate the last cookie? It was the dog!"



function cookie(x){
  return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}


cookie = x => `Who ate the last cookie? It was ${x.big ? 'Zach' : x.toFixed ? 'Monica' : 'the dog'}!`


function cookie(x){
var resultString = "Who ate the last cookie? It was "
  switch (typeof x){
    case "string": return resultString += "Zach!";
    case "number": return resultString += "Monica!";
    default: return resultString += "the dog!";
  }
}
