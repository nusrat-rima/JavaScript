function square (number ){
  console.log("Value of the number parameter ",number)
  const sq_num = number * number;
  console.log("Square of the number :",sq_num)
}
square(4);

function  add(num1 ,num2) {
  const sum = num1 +num2;
  console.log("sum :",sum)
}
add(293,313)


function addAll(a,b,c,d,e) {
  const sum = a+b+c+d+e
  console.log('sum :', sum);
}

addAll(2,3,4,5,6)

function difference(num1,num2) 
{
  const diff = num1 -num2;
  console.log(num1,num2,'difference is :',diff)
}
const fatherAge = 40;
const myAge =10;
difference(fatherAge,myAge)