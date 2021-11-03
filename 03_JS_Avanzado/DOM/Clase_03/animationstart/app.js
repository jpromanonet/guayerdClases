var x = document.getElementById("miAnimacion");

// Iniciar la animación con JS
function animacion() {
    x.style.WebkitAnimation = "mymove 4s 2"; // Es para Chrome, Safari y Opera
    x.style.animation = "mymove 4s 2"; // Esto es para Mozilla
}

// Como iniciar la animación en Chrome, Safari y Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Sintaxis standard (Para firefox y derivados)
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
    this.innerHTML = "animation event ocurred - La animación comenzo";
    this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
    this.innerHTML = 'animationiteration event ocurred - La animación itero';
    this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
    this.innerHTML = "animationiteration event ocurred - La animación fue completada"
    this.style.backgroundColor = "lightgray";
}