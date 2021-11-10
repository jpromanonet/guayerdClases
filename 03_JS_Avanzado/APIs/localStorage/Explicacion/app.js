// Session Storage

sessionStorage.setItem("nombre", "Alexis");
sessionStorage.setItem("apellido", "Zarate");

document.getElementById("nombre").innerHTML = sessionStorage.getItem("nombre")
document.getElementById("apellido").innerHTML = sessionStorage.getItem("apellido")

// Local Storage
if(typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("prueba", "Esto es una prueba")
    // Devolucion
    document.getElementById("prueba").innerHTML = localStorage.getItem("prueba");
} else {
    document.getElementById("prueba").innerHTML = "Tu navegador no soporta Web Storage";
}