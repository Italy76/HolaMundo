let texto = prompt("Insertar un texto");
// Creo variable para obtener la longitud del texto que se escriba.
let longitud = texto.length;
//Recorro el texto con un bucle.
for(i=0; i <= longitud; i++){
    let caracter = texto.charAt(i)
    // variable.charAt nos devuelve un caracter en base al número que expresa su posición en una cadena.
    document.write(caracter + "-")
// con el document.write insertamos la variable caracter y la concatenamos con el signo "-"
};
