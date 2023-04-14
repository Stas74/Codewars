// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters

/*

Define the following classes.

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the 
following order: length, width, height and store these three values 
in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid 
and a getter volume which returns the volume of the cuboid.

II. Cube
class Cube is a subclass of class Cuboid. 
The constructor function of Cube should receive one argument only, its length, 
and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

Related Articles
Listed below are a few articles of interest that may help you complete this Kata:

Stack Overflow - What are getters and setters in ES6?
getter - Javascript | MDN

*/

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get volume() {
    return this.length * this.width * this.height;
  }

  get surfaceArea() {
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
  }
}

class Cube extends Cuboid {
  // Don't forget to make a call to super ;)
  constructor(length) {
    super(length, length, length);
  }
}

var cuboid = new Cuboid(1, 2, 3);

console.log(cuboid.length); // 1
console.log(cuboid.width); // 2
console.log(cuboid.height); // 3
console.log(cuboid.volume); // 6
console.log(cuboid.surfaceArea); // 22

cuboid.length = 4;
console.log(cuboid.volume); // 24
console.log(cuboid.surfaceArea); // 52




class Cuboid {
  constructor(length, width, height) {
    Object.assign(this, { length, width, height })
  }
  get surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  }
  get volume() {
    return this.length * this.width * this.height
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}



class Cuboid {
  constructor(length, width, height) {
    Object.assign(this, { length, width, height });
  }
  get volume() {
    return this.length * this.width * this.height;
  }
  get surfaceArea() {
    const { length: l, width: w, height: h } = this;
    return (2 * l * w) + (2 * l * h) + (2 * h * w);
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}



