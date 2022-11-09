// Classy Extentions

/*
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. 
You will be preloaded with the Animal class, so you should only edit the Cat class.

Task
Your task is to complete the Cat class which Extends Animal and 
replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).
*/

class Animal {}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}

var cat = new Cat('Mr Whiskers')
console.log(cat.speak()); // 'Mr Whiskers meows.'

cat = new Cat('Lamp');
console.log(cat.speak()); // 'Lamp meows.'




class Animal{
    constructor(name){
        this.name = name;
    }
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}

