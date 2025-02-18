const numbers = [4, 7, 2, 8, 1, 7];
//const numbers_asc = numbers.sort()
const numbers_asc = [...numbers].sort(function (a, b) {
  return a - b;
});
const numbers_dsc = [...numbers].sort(function (a, b) {
  return b - a;
});
console.log(numbers_asc);
console.log(numbers_dsc);
