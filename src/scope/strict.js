"use strict"
pi = 3.1416;
console.log(pi);

// devuelve error, ya que pi no esta definido y al usar el strict no utiliza el hoisting por ende no se declara 

function myFunction(){
    "use strict"
    return pi = 3.1416;
}

console.log(myFunction())