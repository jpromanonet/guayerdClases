// Validar campos de texto en un form

function validateForm() {
    let x = document.forms["myForm"]["nombre"].value;
    if(x == ''){
        document.getElementById("validacion").innerHTML = "Es necesario completar tu nombre";
        return false;
    }
}

// Validar campos numericos en un form
function numbers() {
    // Vamos a tomar el valor del campo number
    let x = document.getElementById("number").value;
    // Si x no es un numero o es menos de 1 o mas de 10
    let text;
    if(isNaN(x) || x < 1 || x > 10){
        text = "El input no es valido";
    } else {
        text = "Input OK"
    }

    document.getElementById("validacionNumero").innerHTML = text;
}