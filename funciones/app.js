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

// *** Funciones autoinvocadas ***
// 1. Abris parentesis 
// 2. Declaras function sin nombre con parentesis
// 3. abris llaves al lado de function sin nombre
// 4. Entre las llaves escribis tu codigo
// 5. Despues del ultimo parentesis que encierra a function, el codigo y las llaves, abris parentesis () y pones ; y se autoinvoca

(function () {
    let x = "Bienvenida Romina!";
    alert(x);
})();

// Funciones pueden ser utilizadas como valores (es una forma más facil de auto-invocar funciones)
function saludar(){
    alert("Buenas buenas =)");
}

let hola = saludar();

// Arrow functions o "Funciones Flechas"

// ES5 (forma vieja de declarar una función)
var x = function(x, y){
    return x * y;
}

// ES6 (Forma nueva de declarar una funcion o arrow functions)
const x = (x, y) => x * y;

// Argumentos y Parametros

/* 
1. Los parametros NUNCA especifican su tipo de dato
2. No tienen que intentar validar el tipo de dato de un parametro
3. Tener en cuenta que las funciones no checkean si se paso el parametro, cuando declaramos un parametro pero no utilizamos, al ejecutar la funcion, nos va a dar un error conocido como "missing argument" o "argumento perdido" en español.
*/