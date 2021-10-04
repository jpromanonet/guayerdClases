// Hay 2 formas de declarar una función

// Definiendo una funcion (No se ejecuta inmediatamente)
/*function multiplicacion(a, b) {
    let c = a * b;
    alert(c);
    c = a + b;
    alert(c)
    c = a - b;
    alert(c)
    c = a / b;
    alert(c)
}*/

// Declarando una funcion como expresion (se ejecuta inmediatamente)
//const x = function(a,b){return a * b}

// Ejecutando una funcion
let primerNumero = prompt("Introduce un numero");
let segundoNumero = prompt("Introduce otro numero")

//multiplicacion(parseInt(primerNumero),parseInt(segundoNumero));

// Declarar funciones con el constructor
const miFuncion = new Function("a", "b", "console.log(a * b)");

let resultado = miFuncion(4, 5)

// Hoisting
// Llamamos a la funcion antes de declararla
potencia(5);

// Declaramos la funcion despues
function potencia(a){
    console.log(a * a);
}