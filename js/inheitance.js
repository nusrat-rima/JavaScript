class Vehicle {
  constructor(name,price){
    this.name =name;
    this.price =price;
  }
  move(){
    console.log("i can move")
  }
}

class Bus extends Vehicle{
  constructor(name,price,seat){
    super(name,price);
    this.seat=seat;
  }
  route(){
    console.log("Dhaka to Dinajpur")
  }
}

const greenLine = new Bus("greenLine",1200,3)
console.log(greenLine);
greenLine.route();