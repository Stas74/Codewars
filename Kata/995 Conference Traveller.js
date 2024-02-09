// Conference Traveller

/*
Lucy loves to travel. Luckily she is a renowned computer scientist and gets to travel to international conferences 
using her department's budget.

Each year, Society for Exciting Computer Science Research (SECSR) organizes several conferences around the world. 
Lucy always picks one conference from that list that is hosted in a city she hasn't been to before, 
and if that leaves her with more than one option, she picks the conference that she thinks would be most relevant 
for her field of research.

Write a function conferencePicker that takes in two arguments:

citiesVisited, a list of cities that Lucy has visited before, given as an array of strings.
citiesOffered, a list of cities that will host SECSR conferences this year, given as an array of strings. 
citiesOffered will already be ordered in terms of the relevance of the conferences for Lucy's research 
(from the most to the least relevant).

The function should return the city that Lucy should visit, as a string.

Also note:

You should allow for the possibility that Lucy hasn't visited any city before.
SECSR organizes at least two conferences each year.
If all of the offered conferences are hosted in cities that Lucy has visited before, 
the function should return 'No worthwhile conferences this year!' (Nothing in Haskell)

Example:

citiesVisited = ['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'];
citiesOffered = ['Stockholm','Paris','Melbourne'];

conferencePicker (citiesVisited, citiesOffered);
// ---> 'Paris'
*/

function conferencePicker(citiesVisited, citiesOffered) {
  const filteredCities = citiesOffered.filter(el => !citiesVisited.includes(el));
  return filteredCities[0] ? filteredCities[0] : 'No worthwhile conferences this year!';
}

console.log(
  conferencePicker(
    [
      "Mexico City",
      "Johannesburg",
      "Stockholm",
      "Osaka",
      "Saint Petersburg",
      "London",
    ],
    ["Stockholm", "Paris", "Melbourne"]
  )
); // 'Paris'
console.log(
  conferencePicker(
    ["Buenos Aires", "Mexico City", "Johannesburg"],
    ["Melbourne", "Moscow"]
  )
); // 'Melbourne'

console.log(
  conferencePicker(
    ['London','Berlin','Mexico City','Melbourne','Buenos Aires','Hong Kong','Madrid','Paris'],['Berlin','Melbourne']
  )
); // 'No worthwhile conferences this year!'




function conferencePicker (citiesVisited, citiesOffered) {
	return citiesOffered.find(city => !citiesVisited.includes(city)) || 'No worthwhile conferences this year!'
}



const conferencePicker = (citiesVisited, citiesOffered) =>
  citiesOffered.find(val => !citiesVisited.includes(val)) || `No worthwhile conferences this year!`;



const conferencePicker = (cV, cO) => cO.filter(x => cV.indexOf(x) < 0)[0] || 'No worthwhile conferences this year!'




function conferencePicker (citiesVisited, citiesOffered) {
  let visited = new Set(citiesVisited);
  return citiesOffered.find(e => !visited.has(e))||'No worthwhile conferences this year!';
}


// Recursion
const conferencePicker = (visited, offered) => 
  function f([city, ...offered]){
    if (!city) return 'No worthwhile conferences this year!'
    if (visited.includes(city)) return f(offered)
    return city
  }(offered)




const conferencePicker = (v,o) =>o.filter(c => !v.includes(c))[0] ||'No worthwhile conferences this year!'
