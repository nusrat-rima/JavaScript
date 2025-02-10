//1.
const num = ['strawberry', 'apple', 'lichi', 'mango', 'orange'];
console.log(num[2]);
num[1] = 'jambura';
console.log(num);


//2.
let spots = ['switzerland','paris','thailand'];
spots.push('Germany');
spots.push('India','Finland');
spots.pop();
console.log(spots);

//3.
let books =['learn C','DSA','Discrete'];
console.log(books.includes('javaScript'));
console.log(Array.isArray(books));



//4.
let mixArray =[4,5,'Nusrat',"dream",3];
console.log(Array.isArray(mixArray));


//5.
let dreams =['Travel','Hazz','Shopping'];
console.log(dreams);
let names =['Nusrat','Mustarif','Mother'];
console.log(names);
let result = dreams.concat(names);
console.log(result);
