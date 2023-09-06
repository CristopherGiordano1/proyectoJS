
mostrarMensajeBienvenida();

//Función para mostrar mensaje de bienvenida

function mostrarMensajeBienvenida() {

    alert("Bienvenido al simulador");
}

let pregunta = (alert (""));opción
let respuesta = parseInt(prompt("¿Qué opción elegis?\n1 Opción A\n2 Opción B\n3 Opción C"));
let intentos = 3;


//Función para preguntar al usuario una pregunta y obtener su respuesta

function preguntarPregunta() {

    intentos = 3;
    respuesta;
}

//Permitir hasta 3 intentos

while (intentos < 3){

if (respuesta === "1"){
    alert("Elegiste la Opción A");
    break;
}

else if (respuesta === "2"){
    alert("Elegiste la Opción B");
    break;

}

else if (respuesta === "3"){
    alert("Elegiste la Opción C");
    break;

}

else {
    alert("Respuesta no válida. Seleccioná 1, 2 o 3.");
    intentos++;
}

if (intentos >= 3) {
    alert("Superaste los intentos");

}

}


preguntarPregunta();
