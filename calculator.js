function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}


function calculator(a,b,operation){
  if(operation=='add'){
    const result = add(a,b);
    return result;
  }
  if(operation=='substract'){
    const result = substract(a,b);
    return result;
  }
  if(operation=='multiply'){
    const result = multiply(a,b);
    return result;
  }
  if(operation=='division'){
    const result = division(a,b);
    return result;
  }
}

const result = calculator(5,7,'multiply')
console.log(result)