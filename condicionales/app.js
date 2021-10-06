
let edad;
let siFuma;

edad = 18;
siFuma = confirm('¿Sos fumador?');

// ESTO ES UNA CONDICION

if(parseInt(edad) >= 18 && siFuma === true ){
    alert("Sos mayor de edad");
    alert("Fumar es perjudicial para la salud")
} else if(parseInt(edad) >= 18  && siFuma === false ) {
    alert("Sos mayor de edad");
    alert("Que bien! porque fumar hace mal");
} else {
    alert("No sos un Millenial");
    let quienSos = prompt("¿Sos Alexis?")
        if(quienSos == "Si"){
            alert("Anda a mirar Backyarddigan");
        } else {
            alert("Que bajon, yo esperaba a Alexis ¬¬");
        }
}


if(edad !== 27){
    alert("No perteneces al club de los 27");
}

// SWITCH
var day;
day = prompt("¿Que dia de la semana buscas? (Usa numeros del 1 al 7, 1 representa el Domingo)");

switch(day){
    case "1":
        alert("Es Domingo!");
        break;
    case "2":
        alert("Es Lunes!");
        break;
    case "3":
        alert("Es Martes");
        break;
    case "4":
        alert("Es Miercoles =)");
        break;
    case "5":
        alert("Es Jueves! =) =)");
        break;
    case "6":
        alert("Es Viernes!! YAY! birra n.n");
        break;
    case "7":
        alert("Es Sabado =)");
        break;
    default:
        alert("Solo son validos dias del 1 al 7");
        break;
}

/*

=   | Un igual se utiliza y solo sirve para asignar valores a las variables
==  | Dos iguales se utiliza para comparar una variable a un valor N
=== | Tres iguales se utiliza para comparar una variable a un valor N y verificar que sean estrictamente iguales

-> ¿Que significa esto? <-

"Hola" === "hola" | Esto NO ES estrictamente igual, porque una empieza con mayuscula y la otra no
"Hola" == "hola" | Para el IF eso es igual, porque no tiene el modo estricto.

-> Operadores Logicos <-

&& == AND == En español significa "Y"
|| == OR == En español significa "O"
< o >
!== significa distinto de

*/