let texto = prompt("Escribir una cadena de texto");
let longitud = texto.length;
let contador = 0;
let sumador = 0;
while(longitud >= contador) {
    // Obtengo un caracter en base al número que indica su posición.
  let caracter = texto.charAt(contador);
  if (caracter == "a") {
    sumador++
  } else if (caracter == "e") {
    sumador++;
  } else if (caracter == "i") {
    sumador++;
  } else if (caracter == "o") {
    sumador++;
  } else if (caracter == "u") {
    sumador++;
  }
  contador++;
}
document.write("Número de vocales: "+ sumador)
