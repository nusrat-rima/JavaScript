const number = ['elon', 'bill', 'mark', 'waren'];
for (const friends of number) {
  //console.log(numbers);
}
for (let i = 0; i < number.length; i++) {
  //console.log(i);
  //console.log(numbers[i]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
//numbers.reverse();
//console.log(numbers);

const rev_numbers = [];
for (const num of numbers) {
  //console.log(num);
  //rev_numbers.unshift(num);
}
//console.log(rev_numbers)

for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  console.log(num);
}
