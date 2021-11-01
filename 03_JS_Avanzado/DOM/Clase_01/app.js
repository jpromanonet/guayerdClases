// Como escribir texto desde el DOM

document.getElementById("demo").innerHTML = "Hola Guayerd";

// Como modificar imagenes desde el DOM
/*document.getElementById("imagenesgato").src = "gato2.png";*/

// Queremos ver la fecha actual
document.getElementById("fecha").innerHTML = "Fecha: " + Date();

// Podemos escribir en HTML desde JS
/*document.write("La tarea es hacer un reloj que se vea linda y se actualize solo usando html");*/

// Formularios
function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        document.getElementById("validacion").innerHTML = "Es necesario ingresar un nombre";
        document.getElementById("imagenesgato").src = "gato1.png";
        return false;
    } else {
        document.getElementById("validacion").innerHTML = "Muchas gracias por contactarnos!";
        document.getElementById("imagenesgato").src = "gato2.png";
        return false;
    }
}

// Estilos con el DOM
document.getElementById("fecha").style.background="lightblue";

function cambiarColor(){
    document.getElementById("color").style.background="lightgreen"
}