var ejercicioB = "Ejercicio B"

console.log(ejercicioB)
var cantidadDeGatos = 8;
var cantidadDePasos = 5;

for (var a = 1; a <= cantidadDeGatos; a++) {
    var numeroDeGato = "Gato #" + a + ": 🐈 ";

    for (var b = 1; b <= cantidadDePasos; b++) {
        numeroDeGato +=  "🐾";
    }
    console.log(numeroDeGato);
}