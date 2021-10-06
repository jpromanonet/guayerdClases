// Bucle FOR

alert("Esto el alert 1");
alert("Esto el alert 2");
alert("Esto el alert 3");
alert("Esto el alert 4");
alert("Esto el alert 5");

// Hacemos lo mismo pero usando un FOR

// Usamos VAR


for(var i = 1; i < 6; i++) {
    alert("Esto es el alert " + i);
}

// Usamos LET

for(let i = 0; i < 6 ; i++){
    alert("Esto es el alert " + i);
}

/*
variable++ = el simbolo ++ a la derecha, en JS suma un entero a un valor numerico(1)
*/

// Bucle WHILE
let texto = "";
let i = 0;

while(i < 10){
    texto += "El numero es: " + i + "\n";
    alert(texto);
    i++
}

do {
    texto += "El numero es: " + i + "\n";
    alert(texto);
    i++;
} while(i < 10);