let edad;

edad = prompt('¿Que edad tenes?');

// ESTO ES UNA CONDICION
if(parseInt(edad) >= 18){
    alert("Sos mayor de edad");
    let franjaEtaria = prompt("¿Sos mayor de 30?");
    if(franjaEtaria == "Si"){
        alert("Sos un millenial");
    } else {
        alert("Sos generacion Z");
    }
} else {
    alert("No sos mayor de edad");
    let quienSos = prompt("¿Sos Alexis?")
    if(quienSos == "Si"){
        alert("Anda a mirar Backyarddigan");
    } else {
        alert("Que bajon, yo esperaba a Alexis ¬¬");
    }
}