alert("¡Bienvenido!")

let cantidadMascotas = prompt("¿Cuántas mascotas tenes?");


if (cantidadMascotas >= 1){
    console.log("Tengo " + cantidadMascotas + " mascota/s");
}else if(cantidadMascotas < 1){ 
    cantidadMascotas = prompt("¿Cuántas mascotas tenes?");
    
}

let tipoMascota = (prompt("De qué raza es tu mascota? (Perro o gato)"));
console.log("La raza de mi mascota es " + tipoMascota);

let pesoMascota = (prompt("¿Cuál es el peso?"));
console.log("Mi mascota pesa " + pesoMascota + " kilos");

let gramosDia = parseInt(prompt("¿Cuántos gramos de alimento le das a tu mascota por día?"));
console.log("Mi mascota come " + gramosDia + " gramos por día");

let pesoBolsa = parseFloat(prompt("¿De cuántos kilos es la bolsa de alimento balanceado que compraste?"))*1000;
console.log("Compré una bolsa de " + pesoBolsa + " gramos");

let frecuenciaCompra = (pesoBolsa / gramosDia);
console.log("El alimento te va a durar " + parseInt(frecuenciaCompra) + " días");

alert("La bosa te va a durar " + parseInt(pesoBolsa / gramosDia) + " días")