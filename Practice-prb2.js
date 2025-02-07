//1.
// var Burger = 550;
// var Coke = 30;
// if (Burger > 500) {
//   console.log(Burger);
// } else {
//   console.log(Coke);
// }

//2.BMI Calculator and Health Category
/*var height = 1.524 ;
var weight = 50;
var BMI = weight / (height * height);
console.log(BMI.toFixed(2));
if (BMI < 18.5) {
  console.log('You are underweight');
}
 else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log(' you are normal.');
}
 else if (BMI >= 25 && BMI <= 29.9) {
  console.log('you are overweight.');
}
 else {
  console.log('You are obese');
}
 */

//3.Grade Calculator
/*
var marks = 94;
if (marks >= 90 && marks <= 100) {
  console.log('A+');
} else if (marks >= 80 && marks <= 89) {
  console.log('B+');
} else if (marks >= 70 && marks <= 79) {
  console.log('C+');
} else if (marks >= 60 && marks <= 69) {
  console.log('D+');
} else {
  console.log('F');
}
*/

//4.
/*
let mine = 70;
let him = 79;
if (mine > 80) {
  if (him > 80) {
    console.log('Go with him for lunch');
  } else if (him >= 60 || him < 80) {
    console.log('good luck next time');
  } else if (him >= 40 || him < 60) {
    console.log("keep your friend's message unseen.");
  } else {
    console.log('block your friend');
  }
} else {
  console.log('go to home and sleep and act sad');
}
  */

//5.
/*
let num1 = 10,
  num2 = 20;

var result;
if (num1 > num2) {
  result = num1 * 2;
  console.log(result);
} else {
  result = num1 + num2;
  console.log(result);
}

result = num1 > num2 ? num1 * 2 : num1 + num2;
  */

//6.
let age = 22;
var ticket = 500;
if (age < 10) {
  ticket = 0;
} else if (age > 15 && age <= 25) {
  ticket = ticket - (ticket * 50) / 100;
} else if (age >= 60) {
  ticket = ticket - (ticket * 15) / 100;
} else {
  ticket = 800;
}
console.log(ticket);
