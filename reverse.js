let text = 'I am learning web dev';
//let reverse = '';
// for (const letter of text) {
//   reverse = letter + reverse;
// }
//console.log(reverse);

/*
for(let i=0;i<text.length;i++){
  const letter =text[i];
  reverse = letter +reverse;
}
console.log(reverse);
*/


//shortcut
const reversed = text.split('').reverse().join('');
console.log(reversed);


