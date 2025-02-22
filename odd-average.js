/**
 * 1.put odd numbers in a array and determine average of the numbers
 */

function oddAverage(numbers) {
  const odds = [];
  //  for(const number of numbers){
  //  if(number %2 === 1){
  //   console.log(number)
  //   odds.push(number)
  //  }
  //  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      odds.push(numbers);
    }
  }
  //Odds is the array that contains only the odd numbers
  let sum = 0;
  //  for(const number of odds){
  //   sum = sum +number;
  //  }
  console.log(numbers);
  for (let i = 0; i < odds.length; i++) {
    sum = sum + numbers[i];
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}

const numbers = [41, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log('average of the odd numbers :', avg);
