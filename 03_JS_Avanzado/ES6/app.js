/*// La declaracion de variables, se dejo de lado VAR para usar LET y CONST

// antes
var x = 10;

// ES6
let x = 10;
const x = 10;

// Funciones en ES6

// Antes
var x = function(x, y) {
    return x * y;
}

// ES6+
// Las arrow function no poseen .this, no son buenas para ser utilizadas con objetos, no pueden hacer hoisting y por lo tanto deben ser definidas antes de ser utilizadas.
const x = (x, y) => x * y;
const x = (x, y) => {return x * y};

// Arrays

// Antes
var array1 = ["Mate", "Termo", "Bombilla"];

// ES6+
const array2 = ["Mate", "Termo", "Bombilla"];
// let texto = "Galletas", "Pan";

// For loop

// Antes
for(var i = 0; i < 10; i++){
    alert("Hola");
}

// ES6+

// Ejemplo 01
const array2 = ["Mate", "Termo", "Bombilla"];
let texto = "";

for(let x of array2){
    texto += x + " ";
    console.log(texto)
}

// Ejemplo 02
let lenguaje = "Javascript";
let texto = "";

for (let x of lenguaje){
    texto += x + " ";
    console.log(texto)
}
*/
// Map

// Creamos 2 objetos
const manzanas = {nombre: 'Manzanas'}
const naranjas = {nombre: 'Naranjas'}

// Creamos un nuevo mapa
const frutas = new Map();

console.log(frutas)
