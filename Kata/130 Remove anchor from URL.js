// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


function removeUrlAnchor(url) {
  return url.indexOf("#") > 0 ? url.slice(0, url.indexOf("#")) : url;
}


console.log(removeUrlAnchor("www.codewars.com#about")); // 'www.codewars.com'




function removeUrlAnchor(url){
  return url.split('#')[0];
}


function removeUrlAnchor(url){
  // TODO: complete
  return url.replace(/#.*/gi,"");
}


const removeUrlAnchor = url => url.replace(/#.+$/,'');
