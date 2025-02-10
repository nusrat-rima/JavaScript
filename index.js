const numbers = [23,1,5,13,7,0,3];
console.log(numbers.length);//length pf the array
console.log(numbers[0]);// array index starts with 0 and get by index
const three = numbers[2];
console.log(three);//set by index
numbers[1]=99;
console.log(numbers);

 //const ages [];
const ages = [12,34,99,45,61];
ages.push(23,11,0);// added elements to the array

ages.pop()// it removes the last elements
const out1 = ages.pop();//it could be store.
console.log(out1);
console.log(ages);


ages.shift();//it removes the first element
ages.unshift(313);//it insert an element  first
console.log(ages);
