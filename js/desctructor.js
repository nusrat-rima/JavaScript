const hena = {
  names: 'hena',
  age: 10,
  friend: ['hero alom', 'bappa']
  
};

//for in Loop through an Object
for(let key in hena ){
  console.log(`key : ${key} value : ${hena[key]}`)
}




//Object.freeze(hena)
//Object.seal(hena)
//hena.age =20;
//hena.userStatus= 'not found';


//console.log(Object.keys(hena))
//console.log(Object.values(hena))
//console.log(Object.entries(hena))



// destructuring the object
const { names, age, friend, userStatus } = hena; 
//console.log(friend); //logging the status

 
// Destructing in an Array
 const person = ['hero alom',"mark",'Mustarif','rima'];

 const [ text,obj,mine,yours]= person;
 //console.log(mine)