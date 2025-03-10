class product {
  constructor(name, price, brand, owener) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.owener = owener;
  }
  details() {
    console.log(`This is about ${this.price} amount`);
  }
}

const iphone = new product("iphone",5000,"apple","steve jobs")
console.log(iphone);
iphone.details()

const xiaomi = new product("vivo",60000,"v40","unknown")
console.log(xiaomi)