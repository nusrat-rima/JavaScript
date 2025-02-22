const heights = [65, 66, 23, 78, 93, 78];

function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

function getMin(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
const max = getMax(heights);
const min = getMin(heights);
console.log('Max value is :', max);
console.log('Min value is :', min);
