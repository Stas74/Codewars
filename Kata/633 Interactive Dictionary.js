// Interactive Dictionary

/*
In this kata, your job is to create a class Dictionary which you can add words to and their entries. 

Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana

Good luck and happy coding!
*/


class Dictionary {
  constructor() {
    this.dict = {};
  }
  
  newEntry(key, value) {
    this.dict[key] = value;
  }
  
  look(key) {
    return this.dict[key] || `Can\'t find entry for ${key}`;
  }
}

let d = new Dictionary();

d.newEntry('Apple', 'A fruit');
console.log(d.look('Apple')); // 'A fruit'

d.newEntry('Soccer', 'A sport')
console.log(d.look('Soccer')); // 'A sport'
console.log(d.look('Ball')); // 'Can\'t find entry for Ball'




class Dictionary {
  constructor() {
    this.dict = new Map();
  }
  newEntry(key, value) {
    this.dict.set(key,value);
    return this;
  }
  look(key) {
    return this.dict.get(key) || `Can't find entry for ${key}` ;
  }
}



class Dictionary {
  newEntry(key, value) {
    this[key] = value;
  }
  
  look(key) {
    return this[key] || `Can't find entry for ${key}`;
  }
}



class Dictionary {
  constructor() {
    this.entries = {};
  }
  
  newEntry(key, value) {
    this.entries[key] = value;
  }
  
  look(key) {
    return key in this.entries ? this.entries[key]:
    `Can't find entry for ${key}`;
  }
  
}
