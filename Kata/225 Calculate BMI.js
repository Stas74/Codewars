// Calculate BMI

/*
Write function bmi that calculates body mass index (bmi = weight / height ** 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let index = weight / height ** 2
  return index <= 18.5 ? "Underweight" : index <= 25.0 ? "Normal" : index <= 30.0 ? "Overweight" : "Obese";
}


console.log(bmi(80, 1.80)) // Normal




const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";


