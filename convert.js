function inchOfFeet(inch) {
  const feet = inch / 12;
  return feet;
}
// function inchOfFeet2(inch) {
//   const feetFraction = inch / 12;
//   const feetNumber = parseInt(feetFraction);

//   const inchRemaining = inch % 12;
//   const result = feetNumber + ' ft ' + inchRemaining + 'inch';
//   return result;
// }

const height1 = inchOfFeet(75);
console.log(height1);

// const height2 = inchOfFeet2(75);
// console.log(height2);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

function kiloMeterToMiles(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
