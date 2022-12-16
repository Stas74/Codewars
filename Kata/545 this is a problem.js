// "this" is a problem

/*
We want to create a constructor function 'NameMe', which takes first name and last name as parameters. 
The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, the "name" property is accessible, 
but the "firstName" and "lastName" is not accessible. 
All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe
*/

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    name: this.firstName + " " + this.lastName,
  };
}

var n = new NameMe("John", "Doe");

console.log(n.firstName); // "John"
console.log(n.lastName); // "Doe"
console.log(n.name); // "John Doe"




function NameMe(first, last) {
    this.firstName = first;
    this.lastName  = last;
    this.name = first + ' ' + last;
}



function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}



function NameMe(first, last) {
    return { 
      firstName : first,
      lastName : last,
      name: first + ' ' + last
   }
}



function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName;
  return this;
}
