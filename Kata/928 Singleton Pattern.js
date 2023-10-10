// Singleton Pattern

/*
In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. 
This is useful when exactly one object is needed to coordinate actions across the system.

Create an Singleton pattern, so there is one object in system.

Example:

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1
*/

var Singleton = function () {
  if (Singleton.__instance) {
    return Singleton.__instance;
  }
  Singleton.__instance = this;
};





var Singleton = (function () {
  var instance = null;

  return function(){
    return instance || (instance = this);
  };
})();




var Singleton = function(){
  return Singleton.ins = Singleton.ins ? Singleton.ins : this;
};




var Singleton = function Singleton() {
  
  // Returns singleton in case it was already defined
  if (Singleton.prototype._singletonInstance) {
  	return Singleton.prototype._singletonInstance;
  }
  
  // Otherwise defines singleton (to be returned next time around)
  Singleton.prototype._singletonInstance = this;

	// Defining properties
	this.test = 1;

};



var Singleton = (function(){
  let singleton;
  return function _() {
    if (singleton)
      return singleton;
    singleton = this;
  };
})();
