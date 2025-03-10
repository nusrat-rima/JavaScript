const products1 = [
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

const newProducts = products1.map(p => {
  if (p.brand ==='apple') {
    p.price= p.price+100;
  }
  return p;
});
console.log(newProducts)//using map method


const singleProduct = products1.find(p=>p.id===3);
console.log(singleProduct)//using find method

const newProducts2 = products1.filter(p=>p.name ==="iphone");
console.log(newProducts2)