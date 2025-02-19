function evenSizedString(str){
const size = str.length;
console.log(str,size);
if(size %2 === 0){
  console.log('even size')
  return true;
}
else {
  console.log('odd size')
  return false
}
}
 //evenSizedString('Dhaka')
 //evenSizedString('faka')


/**
 * Objective :Write a function to give me sum of all numbers
 * 
 */

function sumOfNumbers(numbers) {
  let sum =0;
  for(const number of numbers){
    console.log(number)
    sum = sum+number;
    return sum
  } 
}

const numbs = [54,62,12,6]
const sum = sumOfNumbers(numbs)
//console.log('sum of numbers ',sum)


/**
 * 
 * create function that will return only the even numbers
 * return the sum of even numbers
 */


fucntion evenNumbersOnly(numbers){
  for(const number of numbers){
    if(number %2 ===0)
    console.log(number)
  }
}

