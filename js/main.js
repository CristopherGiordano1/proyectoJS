let kilogramosBolsa = prompt ("Ingrese kilos de la bolsa en gramos");
let kilogramosMascota = prompt ("Ingrese el peso de su mascota");
let gramosMascota = (kilogramosMascota * 10);
let alertaDia = kilogramosBolsa / gramosMascota;



alert("Te va a llegar el alerta dento de " + alertaDia.toFixed(2) + " días");

