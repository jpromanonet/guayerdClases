// Variables

// La vieja forma = scope global
// var numerosEnteros;

// Las nuevas formas de declarar variables (ES6)

// let miSegundaVariable; // scope local
// const otraFormaDeVariable; // scope mixto (global y local segun donde se declare)

// Suma
var primerNumero = prompt("Ingresa el primer numero: "); 
var segundoNumero = prompt("Ingresa el segundo numero: ");
var resultado = parseInt(primerNumero) + parseInt(segundoNumero);
alert("Tu resultado es: " + resultado);

// Nombre
var primerNombre = "Carlos";
var segundoNombre = "German";
var nombreCompleto = primerNombre + " " + segundoNombre;
console.log(nombreCompleto);

miPrimerBooleano = True; // Esto significa que esta variable es igual a 1
otroBooleano = False; // Esto significa que es igual 0

// Tipos de datos
/*

Numericos: 
    - INT (enteros) = 1
    - FLOAT (flotantes) = 1.5,

Texto: 
    Strings (Alfanumericas) = "Esto es un texto", "152546"

Booleanas:
    - 0 o 1
    - True or False
*/

// Operadores Aritmeticos
/*

+ = suma
- = resta
/ = division
* = multiplicación

/// Operadores extendidos

% = resto
%% = modulo

*/

// Funcion Math
var numeroExperimental = 20;
console.log(Math.pow(numeroExperimental, 3));
console.log(Math.round(1.77777777777));
console.log(Math.round(Math.random()*1000));
numeroExperimental = 10;
console.log(numeroExperimental);

// Numeros aleatorios limitados
function numeroAleatorioVectorizado(min, max){
    console.log(Math.round((Math.random() * (max - min) + min)))
}

numeroAleatorioVectorizado(10, 100);