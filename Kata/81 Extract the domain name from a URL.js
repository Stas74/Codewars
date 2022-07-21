// Extract the domain name from a URL
// Write a function that when given a URL as a string, 
// parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  url = url.replace('http://', '')
  url = url.replace("https://", "")
  url = url.replace("www.", "")
  return url.split(".")[0]
}

console.log(domainName("http://google.com")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
console.log(domainName("https://youtube.com")); // "youtube"



function domainName(url){
  return  url.replace('http://', '')
             .replace('https://', '')
             .replace('www.', '')
             .split('.')[0];
}


function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
