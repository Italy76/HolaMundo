let texto = prompt("Escribir una cadena de texto");
let longitud = texto.length  //Número de caracteres de la cadena de texto.
let textoFinal = "";

for (i=0; i < longitud; i++){
    let caracter = texto.charAt(i) 
    textoFinal = caracter + textoFinal;   
};
document.write(textoFinal);
