let edad;
let siFuma;

edad = prompt('¿Que edad tenes?');
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