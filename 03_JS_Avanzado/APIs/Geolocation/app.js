const x = document.getElementById("posicion");

function getLocation(){
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        x.innerHTML = err;
    }
}

function showPosition(position) {
    x.innerHTML = "Latitud: " + position.coords.latitude + "<br>Longitud: " +position.coords.longitude;
}