const today = new Date()
const date = new Date('2025-10-2');
console.log(date.getMonth());
console.log(date.getDay);
const specificDate = new Date(2091,0,27);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'))