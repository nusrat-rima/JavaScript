const numbers = [1, 2, 4, 13, 93, 13, 2, 5];
function noDuplicate(numbers) {
  const unique = [];
  for (const item of numbers) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}
const uniqueNumbers = noDuplicate(numbers)
console.log(uniqueNumbers)
