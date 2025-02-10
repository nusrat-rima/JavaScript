//object declaration
const bottle = {
  brand: 'apple',
  price: 1200,
  color: 'white',
  isClean: false,
};

console.log(bottle)
bottle.color='pink';//dot notation ,we can set also.
console.log(bottle);
bottle['brand']='google';
console.log(bottle);//bracket notation
console.log(bottle.price)
bottle.price = 33000;
 const newPrice = bottle.price
 console.log(newPrice)



//objects are non primitive
const subject = {
  name: 'Chemistry',
  teacher: 'Mashiur',
  examDate: '36th july',
  chapters: ['first', 'second', 'third'],
  exams: {
    name: 'Mid-term',
  },
};
