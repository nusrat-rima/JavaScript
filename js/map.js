const number = [1, 2, 3, 4, 5, 6];
// const squareArray = number.map((element) => {
//   return element * element;
// });
//console.log(squareArray);

const newNumbers = number.map((value) => value + 1);

console.log(newNumbers)

const friends2 = ['rahm', 'karm', 'shapla', 'nusu'];
const newFriends = friends2.map((element, index) => {
  console.log(index);
  console.log(element);
});
