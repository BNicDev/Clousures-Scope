//variables
var a; //declarando 
var b = "B";//declaramos y asignamos
b = "bb"; //reasignacion
var a = "aa"//redeclaracion 

//global scope

var fruit = "apple" //global
console.log(fruit)
function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = "arg" // decparando de esta manera se declara de manera global
    console.log(country);
}

countries();
console.log(country);

//