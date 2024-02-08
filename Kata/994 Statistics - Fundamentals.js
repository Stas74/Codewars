// Statistics - Fundamentals

/*
Create a class, DataSet, that has the following properties and methods:

data - Contains an array of the data
mean - Contains the value of the mean average of the data
variance - Contains the value of the variance of the data
stdDeviation - Contains the standard deviation of the data
setMean() - A function that calculates the mean, updates this.mean and returns the value of the mean
setVar() - Sets/resets the variance and the standard deviation of the data set and returns the variance

For example, if I initiate a DataSet with the following data:

var myData = new DataSet(1,2,3,4,5,6,7);
... the following properties will be automatically set:

myData.data === [1,2,3,4,5,6,7];
myData.mean === 4
myData.variance === 4
myData.stdDeviation === 2

Furthermore, if I then alter some of the entries in myData.data and then call the functions setMean() and setVar(), 
the mean, standard deviation and variance of the data should be recalculated and the value of the new mean 
and variance returned.

Notes
Regarding Float Handling and Precision
In this Kata, the computed values of your variance and stdDeviation need only be correct to 3 decimal places 
(the author's solution being the standard for correct values) so you may assume float arithmetic is commutative.
*/

class DataSet {
  constructor(...data) {
    // Define your constructor here
    this.data = data;
    this.mean = data.reduce((prev, cur) => prev + cur, 0) / data.length;
    this.variance =
      data
        .map((el) => (el - this.mean) ** 2)
        .reduce((prev, cur) => prev + cur, 0) / this.data.length;
    this.stdDeviation = Math.sqrt(this.variance);
  }
  // Define the rest of your class here
  setMean() {
    this.mean = this.data.reduce((a, b) => a + b, 0) / this.data.length;
    return this.mean;
  }
  setVar() {
    this.variance =
      this.data
        .map((v) => Math.pow(v - this.mean, 2))
        .reduce((a, b) => a + b, 0) / this.data.length;
    this.stdDeviation = Math.sqrt(this.variance);
    return this.variance;
  }
}

const myData1 = new DataSet(1, 2, 3, 4, 5, 6, 7);
console.log(myData1.data); // [1,2,3,4,5,6,7]
console.log(myData1.mean); // 4
console.log(myData1.variance); // 4
console.log(myData1.stdDeviation); // 2




function mean(list) {
	return list.reduce((sum, n) => sum + n) / list.length;
}

class DataSet {
	constructor(...data) {
  	this.data = data;
    this.setMean();
    this.setVar();
	}
  
  setMean() {
  	return this.mean = mean(this.data);
  }
  
  setVar() {
  	const m = mean(this.data);
		this.variance = mean(this.data.map(x => (x - m) ** 2));
    this.stdDeviation = Math.sqrt(this.variance);
    return this.variance;
  }
}




const DataSet = function(...data) {
  const calcMean = d => d.reduce((c,p)=>c+p,0)/d.length;
  const calcVariance = (d, m) => calcMean(d.map(a => Math.pow(a-m,2)));

  var _data = data;
  var _mean = calcMean(_data);
  var _variance = calcVariance(_data,_mean);
  var _stdDeviation = Math.sqrt(_variance);
    
  return {
    get mean() { return _mean; },
    get data() { return _data; },
    set data(d) { _data = d; },
    get variance() { return _variance },
    get stdDeviation() { return _stdDeviation },
    setMean:_=> {
      _mean = calcMean(_data);
      return _mean;
    },
    setVar:_=> {
      _variance = calcVariance(_data,_mean);
      _stdDeviation = Math.sqrt(_variance);
      return _variance;
    }
  };
}





function DataSet(...a) {
   this.data=[];
   for (i=0;i<a.length;i++) this.data.push(a[i]);
   this.mean=setMean(this.data);
   this.variance=setVar(this.mean, this.data);
   this.stdDeviation=this.variance**0.5;
}

function setMean(data) {c=0; for (i=0;i<data.length;i++) c+=data[i]; return c/data.length}
function setVar(mean,data) {c=0; for (i=0;i<data.length;i++) c+=(data[i]-mean)**2; return c/data.length} 

DataSet.prototype.setMean=function() {this.mean=setMean(this.data); return this.mean}
DataSet.prototype.setVar=function() {this.variance=setVar(this.mean,this.data); this.stdDeviation=this.variance**0.5; return this.variance}





class DataSet {
  constructor(...data) {
    // Define your constructor here
    this.data = data;
  }
  get mean() {
    let maine = 0;
    this.data.forEach((e) => (maine += e));
    return maine / this.data.length;
  }
  get variance() {
    let vari = 0;
    this.data.forEach((e) => (vari += (e - this.mean) ** 2));
    return vari / this.data.length;
  }
  get stdDeviation() {
    return Math.sqrt(this.variance);
  }
  setMean() {
    return this.mean;
  }
  setVar() {
    return this.variance;
  }
  // Define the rest of your class here
}





class DataSet {
  constructor(...data) {
    this.data = data;
    this.setMean();
    this.setVar();
  }
  
  calcMean(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
  
  setMean() {
    this.mean = this.calcMean(this.data);
    return this.mean;
  }
  
  setVar() {
    this.variance = this.calcMean(this.data.map(n => Math.pow((n - this.mean), 2)));
    this.stdDeviation = Math.sqrt(this.variance);
    return this.variance;
  }
}




class DataSet {
  constructor(...data) {
    this.data = data;
    this.mean = this.data.reduce((acc, cur) => acc + cur, 0) / this.data.length;
    this.variance = this.data.map(v => (v - this.mean) ** 2).reduce((acc, cur) => acc + cur, 0) / this.data.length;
    this.stdDeviation = this.variance ** 0.5;
  }
  
  setMean() {
    this.mean = this.data.reduce((acc, cur) => acc + cur, 0) / this.data.length;
    return this.mean;
  }
  
  setVar() {
    this.variance = this.data.map(v => (v - this.mean) ** 2).reduce((acc, cur) => acc + cur, 0) / this.data.length;
    this.stdDeviation = this.variance ** 0.5;
    return this.variance;
  }
}
