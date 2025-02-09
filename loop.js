const numbers = [12, 15, 18, 21, 23];
console.log(numbers);
//for loop
for (const iteration of numbers) {
  console.log(iteration);
}

//While loop
/*
let num = 0;
while (num < 5) {
  console.log('looping', num);
  num++;
}
  */
// let num = 1;//for odd
// let sum = 0;
// while (num <= 10) {
//   sum = sum + num;
//   //console.log('sum :', sum);
//   num++;
// }
// console.log('sum :', sum);


let num = 2; //for even
let sum = 0;
while (num <= 10) {
  sum = sum + num;
  //console.log('sum :', sum);
  num = num + 2;
}
console.log('sum :', sum);



// let num = 1; //for even number displaying
// while (num <= 10) {
//   if (num % 2 === 0) {
//     console.log('even numbers:', num);
//   }
// }



for(let i =1 ;i<=30;i++){
  if(i%5===0){
    console.log(i);
  }
}