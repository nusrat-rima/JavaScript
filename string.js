// const subject = 'chemistry';
// const book = 'Chemistry';

// if (subject.toLocaleLowerCase() === book.toLocaleLowerCase()) {
//   console.log('I am reading');
// } else {
//   console.log('I am not reading anything');
// }

/*
const subject = '    chemistry';
const book = ' chemistry';

if (subject.trim() === book.trim()) {
  console.log('I am reading');
} else {
  console.log('I am not reading anything');
}
  */

const address = 'Dinajpur';
const part = address.slice(2, 5);
console.log(part);

const sentence = 'I am a good and hardworking person';
//console.log(sentence.split(' '))
// console.log(sentence.split('a'));

// const friends = 'Rabeya,Soranli,Sabiha,Mou,joyti';
// const friend = friends.split(',');
// console.log(friend);

const realFriend = ['Rabeya', 'Soranli', 'Sabiha', 'Mou', 'joyti'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));

// String concat
const first = 'Nusrat';
const last = 'Jahan';
const fullName = first + ' ' + last;
console.log(fullName);


//includes

console.log(last.includes('R'));