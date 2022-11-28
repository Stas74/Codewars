// Building blocks

/*
Write a class Block that creates a block (Duh..)

##Requirements

The constructor should take an array as an argument, 
this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`
Examples
    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
    b.getWidth() // -> 2
    
    b.getLength() // -> 4
    
    b.getHeight() // -> 6
    
    b.getVolume() // -> 48
    
    b.getSurfaceArea() // -> 88
Note: no error checking is needed

Any feedback would be much appreciated
*/

class Block {
  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.width * this.length * this.height;
  }
  getSurfaceArea() {
    return 2 * this.width * this.length + 2 * this.height * this.length + 2 * this.width * this.height;
  }
}

let block = new Block([2, 4, 6]);

console.log(block.getWidth()); //  2
console.log(block.getLength()); //  4
console.log(block.getHeight()); //  6
console.log(block.getVolume()); //  48
console.log(block.getSurfaceArea()); //  88






class Block {
  constructor(data){
    [this.w, this.l, this.h] = data;
  }
  getWidth(){ return this.w }
  getLength(){ return this.l }
  getHeight(){ return this.h }
  getVolume(){
    let {l, w, h} = this;
    return w*l*h;
  }
  getSurfaceArea(){
    let {l, w, h} = this;
    return 2 * (l*w + l*h + w*h);
  }
}





class Block {
  constructor([width, length, height]) {
    this.x = width
    this.y = length
    this.z = height
  }
  
  getWidth() { return this.x }
  getLength() { return this.y }
  getHeight() { return this.z }
  
  getVolume() {
    return this.x * this.y * this.z
  }
  
  getSurfaceArea() {
    return 2 * this.x * this.y + 2 * this.x * this.z + 2 * this.y * this.z
  }
}
