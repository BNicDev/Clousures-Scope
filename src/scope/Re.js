var firstName; // se declara, con valor undefined
firstName = "nicolas" //se asigna un valor 
console.log(firstName);//mostramos el valor en consola;

var lastName = "brian"; // aca declaramos y asignamos
lastName = "mateo" // se reasigna el valor ;
console.log(lastName);

var secondName = "brian";
var secondName = "nicolas";// nos permite redeclarar y reasignar
console.log(secondName)

// let
let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

let fruit = "banana" // en este caso no se permite redeclarar


// const 
const  animal = "dog";
animal = "cat"; // no nos va a dejar reasignar por el hecho que es una constante 
console.log(animal)


const vehicles = [];
vehicles.push("car");
console.log(vehicles);
vehicles.pop();
console.log(vehicles)