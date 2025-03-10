/**const person1 = {
  name: 'hena',
  age: 30,
  friends: ['korim', 'hero alom'],
  details: {
    job: 'yes',
    isMarrried: true,
    status: 'not found',
    father: {
      name: 'Abdul kuddus',
    },
  },
};
console.log(person1["age"]);
*/

const products = [
  {
    id: 1,
    name: 'iphone',
    color: 'black',
    price: 12000,
    brand: 'apple',
  },
  {
    id: 2,
    name: 'xiaomi',
    color: 'golden',
    price: 1200,
    brand: 'xiaomi',
  },
  {
    id: 3,
    name: 'vivo',
    color: 'sky-blue',
    price: 62000,
    brand: 'vivo',
  },
  {
    id: 4,
    name: 'samsung',
    color: 'golden',
    price: 18000,
    brand: 'samsung',
  },
];

//const newProducts = products.filter((p) => p.id != 3);
//console.log(newProducts);

const product = products.find((p) => p.color === 'golden');
//console.log(product)

products.forEach((product) => {
  if (product.color == 'golden') {
    console.log(product)
  }
});
