var ejercicioC = "Ejercicio C"

console.log(ejercicioC)
var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var a = 1; a <= cantidadDeGatos; a++) {
    var numeroDeGato = "Gato #" + a + ": ";
        if (a % 2 === 0) {
        numeroDeGato +=  "🐈 ⬛";
        } else {
         numeroDeGato +=  "🐈";
        }
    

    for (var b = 1; b <= cantidadDePasos; b++) {
        numeroDeGato += "🐾";
}

    console.log(numeroDeGato);
}