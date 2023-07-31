var ejercicioA = "Ejercicio A"

console.log(ejercicioA)
var cantidadDeGatos = 10;
var emojis = ['😺', '😸', '😹'];

for (var i = 1; i <= cantidadDeGatos; i++) {
  var emojiIndex = (i - 1) % emojis.length;
  console.log('Gato #' + i + ': ' + emojis[emojiIndex]);
}

