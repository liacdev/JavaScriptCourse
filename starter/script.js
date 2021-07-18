// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(2040));
// Problem 1:
// We work for a company building a smart home thermometer.  "Given an array of temperatures of one day, calculate the temperature amplitude. There might sometimes be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    // console.log(curTemp);
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive two arrays of temperatures
// With two arrays, do we implement the same functionality twice? No.
// Just merge two arrays

// Break into sub problems
// - How to merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    // console.log(curTemp);
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
