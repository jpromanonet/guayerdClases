function ejemploAsync(algo) {
    document.getElementById("ejemplo").innerHTML = algo;
}

async function myFunction() {return "Hola!";}
console.log("Soy una funcion asincrona")

myFunction().then(
    function(value) {ejemploAsync(value);},
    console.log("Ejecutando una funcion asincrona")
)