// Como declarar un Array (forma facil)

const autos = ["Saab", "Volvo", "BMW"];

console.log(autos);

// Como declarar un array de forma espaciada, tambien conocida como declaracion multiple

const autos2 = [];
autos2[0] = "Volvo";
autos2[1] = "Saab";
autos2[2] = "BMW";

console.log(autos2[2])

// The final form para definir un array

const bicicletas = new Array("Mohave","Raleigh","Firebird");

console.log(bicicletas[1]) // Si la posicion no existe es undefined

// Como cambiar los valores de los arrays por posiciones =)
bicicletas[1] = "KTM";

console.log(bicicletas[1])

bicicletas[3] = "Renault";
console.log(bicicletas[3]);
console.log(bicicletas)

// Un array puede contener distintos tipos de datos
const persona = ["Pedro", "Sin Apellido", 30, true];
console.log(persona)

// Los arrays pueden contener propiedades internas
const gato = {
    nombre: "Remiendo", 
    edad:"7",
    color:"Naranja"
}

console.log(gato)
console.log(gato.nombre, "es", gato.color)

// ¿Qué mas podemos insertar dentro de un array?

const arrayDeCosas = [];

arrayDeCosas[0] = Date.now;
arrayDeCosas[1] = gato;
arrayDeCosas[2] = bicicletas
arrayDeCosas[3] = autos2;

console.log(arrayDeCosas)
console.log(arrayDeCosas[3][1])

// El largo de un array

const frutas = ["Naranjas", "Mandarinas", "Manzanas", "Bananas", "Frutillas", "Durazno", "Kiwi", "Sandia", "Melon", "Pera", "Pelon", "Uva", "Damasco", "Papaya", "Moras", "Frambuesa", "Fresas", "Tomate", "Maracuya", "Cerezas", "Granada","Higo", "Palta", "Mispero", "Sauco", "Nuez", "Almendra", "Arandanos", "Mango", "Pomelo", "Limon", "Membrillo", "Coco", "Cacao", "Zapallo", "Berenjena", "Piña", "Anana", "Ciruelas", "Castaña de Caju", "Platano"];

console.log(frutas.length);

// Agregar elementos a un array
frutas.push("Pistaccio");
// array.push("Agrego un valor al final del array");
console.log(frutas); 
frutas.push("Sambayon");
frutas.push("Quinotos");
frutas.push("Lima");

console.log(frutas)

// Eliminando elementos de un array
// array.pop("nombre del elemento a eliminar")
frutas.pop("Platano");
console.log(frutas)

// PUSH sirve para sumar elementos al final del array
// POP sirve para eliminar elementos.

frutas.shift();
console.log(frutas)
frutas.unshift("Naranja")
console.log(frutas)

// SHIFT sirve para eliminar elementos al principio de un array
// UNSHIFT sirve para agregar elemento al principio de un array

// Si queremos borrar un elemento en cualquier posicion del array usamos DELETE
// delete nombrearray[posicion que quiero eliminar]

console.log(frutas[23]);
delete frutas[23];
console.log(frutas[23]);

// El metodo splice se utiliza para eliminar datos de un array por posiciones
// SPLICE "separa en fetas" un Array

// EN JS todos los strings son ARRAYS y pueden ser tratados como tal.
let ejemplo = "Esto es un array"
console.log(ejemplo[2]);

console.log(frutas[0][0])

frutas.splice(0, 1);
console.log(frutas)

// Como fusionar Arrays =)
const verduras = ["Lechuga", "Papa", "Rucula", "Cebolla", "Cebolla de verdeo", "Puerro", "Morron", "Repollo", "Kale", "Perejil", "Ajo", "Acelga", "Espinaca", "Mandioca", "Batata", "Zanahoria", "Radicheta", "Coliflor", "Brocoli", "Zapallo anco", "Zuccini", "Calabaza", "Pepino", "Zapallito", "Remolacha", "Choclo", "esparragos", "calabacin", "cebolla morada", "boñiato", "Nabo", "Albahaca"]

// El metodo concat sirve para fusionar o mergear dos o mas arrays
// const variable = array.concat(array a fusionar)

//const todosLosArrays = frutas.concat(verduras);
//console.log(todosLosArrays);

const todosLosArrays = frutas.concat(verduras, bicicletas, autos, autos2)
console.log(todosLosArrays)

// Como ordenar arrays alfabeticamente

const comidaSegunJuan = frutas.concat(verduras)
comidaSegunJuan.sort();
console.log(comidaSegunJuan)

// Como revertir un array
comidaSegunJuan.reverse();
console.log(comidaSegunJuan)

// Ordenamiento numerico
const edades = [20, 20, 22, 28, 50, 32, 27, 35, 20, 20, 32]
edades.sort(function(a, b){return a - b});
console.log(edades);

// Revertimiendo numerico
edades.reverse(function(a, b){return a - b});
console.log(edades)

// El metodo Fisher Yates =)
const fisherYates = [20, 20, 22, 28, 50, 100, 120, 333, 666, 777, 888, 12, 763, 7891, 75, 99, 45, 32, 27, 35, 20, 20, 32]

/*
for (let i = fisherYates.length -1; i > 0; i--){
    // el metodo floor en Math se utiliza para redondear numeros flotante a enteros
    let j = Math.floor(Math.random() * i);
    let k = fisherYates[i]
    fisherYates[i] = fisherYates[j]
    fisherYates[j] = k
}

console.log(fisherYates)
*/

// Encontrar el valor mas alto y mas bajo de un array

// El valor minimo dentro de un array
fisherYates.sort(function(a, b){return a -b});
console.log(fisherYates[0]);

// El valor maximo de un array
fisherYates.sort(function(a, b){return b -a});
console.log(fisherYates[0]);