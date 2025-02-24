const products = [
  { name: 'shampoo', price: 450, quantity: 2 },
  { name: 'shirt', price: 850, quantity: 4 },
  { name: 'Facewash', price: 500, quantity: 3 },
  { name: 'Pant', price: 1000, quantity: 1 },
];
function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    const thisProductCost = product.price * product.quantity;
    total = total + thisProductCost;
  }
  return total;
}

const total = cartTotal(products);
console.log('Total Cost :', total);
