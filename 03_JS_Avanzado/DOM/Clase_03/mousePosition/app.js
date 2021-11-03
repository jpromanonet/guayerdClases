// Mouse Event "Screen X" Property
// Toma la posicion del cursor en el navegador y devolver coordenadas X e Y (longitud y latitud) en pixeles

function mostrarPosicion(event) {
    var x = event.screenX;
    var y = event.screenY;
    var coords = "X coords: " + x + ", Y Coords: " + y
    document.getElementById("demo").innerHTML = coords;
}