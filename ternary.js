/*
Ternary --> three parts
*/
//normal if-else
// const age = 12;
// if (age >= 18) {
//   console.log('You can vote');
// } else {
//   console.log('go home');
// }

const age = 15; // simple ternary
age >= 18 ? console.log('Can vote') : console.log("Can't vote");

let price = 1000;
const isLeader = false;
// price = isLeader === true ? 0 : price + 100;
// console.log(price);

// Optional ternary
if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 100;
}

price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 1000;
console.log(price);
