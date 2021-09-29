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