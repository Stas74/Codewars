// Salesman's Travel

/*
A traveling salesman has to visit clients. He got each client's address e.g. 
"432 Main Long Road St. Louisville OH 43071" as a list.

The basic zipcode format usually consists of two capital letters followed by a white space and five digits. 
The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

To ease his travel he wants to group the list by zipcode.

Task
The function travel will take two parameters r (addresses' list of all clients' as a string)
 and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"
travel(r, "NY 5643") --> "NY 5643:/"
*/

function travel(r, zipcode) {
  const arrCutFiltered = r.split(",").filter(el => zipcode == el.slice(-8)).map(el => el.slice(0, -9));
  if (arrCutFiltered.length == 0) {
    return `${zipcode}:/`;
  }
  const addressArr = arrCutFiltered.map(el => el.split(" ").slice(1).join(" "));
  const houseArr = arrCutFiltered.map(el => el.split(" ").slice(0, 1).join(" "))
  return `${zipcode}:${addressArr.join(",")}/${houseArr.join(",")}`
}


r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

console.log(travel(r, "OH 43071")); //"OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
console.log(travel(r, "NY 56432")) // "NY 56432:High Street Pollocksville/786"
console.log(travel(r, "NY 5643")) // "NY 5643:/"




function travel(r, zipcode) {
    const addressList = r.split(",");

    const streets = [];
    const numbers = [];

    addressList.forEach(address => {
        let zip = address.substring(address.length - 8, address.length);
        if (zip === zipcode) {
            let number = address.substring(0, address.indexOf(" ") + 1);
            let street = address.substring(address.indexOf(" "), address.length -8);
            
            streets.push(street.trim());
            numbers.push(number.trim());
        }
    });
    return `${zipcode}:${streets.join(",")}/${numbers.join(",")}`;
}


function travel(r, zipcode) {
  re = RegExp('(\\d+)\\s+(.+)\\s+'+zipcode+'$')
  streets = r.split(',').map(x=>x.match(re)).filter(x=>x)
  return zipcode+':'+streets.map(x=>x[2])+'/'+streets.map(x=>x[1])
}



