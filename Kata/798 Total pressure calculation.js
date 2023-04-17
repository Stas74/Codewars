// Total pressure calculation

/*

Given the molecular mass of two molecules M1 and M2, their masses present 
m1 and m2 in a vessel of volume V at a specific temperature T, find the total pressure Ptotal​
  exerted by the molecules. Formula to calculate the pressure is:

*/

const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return (givenMass1 / molarMass1 + givenMass2 / molarMass2) * 0.082 * (273.15 + temp) / volume;
};

console.log(solution(44, 30, 3, 2, 5, 50)); // 0.7146511212121212
console.log(solution(60, 20, 10, 30, 10, 100)); // 5.099716666666667


solution=(m1,m2,M1,M2,v,t) => (M1 / m 1+ M2 / m2) * 0.082 * (t + 273.15) / v


function solution(M1, M2, m1, m2, V, T) {
		M1 = m1 * 0.001/M1;
    M2 = m2 * 0.001/M2;
    T = T + 273.15;
	var R = 0.082;

	return (((M1 + M2) * R * T) / V) * 1000;
}


