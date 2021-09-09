let texto =prompt(" Escribe un texto");
let numeroCaracteres = texto.length;
let posicion1Vocal = 0;

while(posicion1Vocal < numeroCaracteres){
    let caracter = texto.charAt(posicion1Vocal);
    if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
        document.write ("la primera vocal del texto es: " + caracter)
    }
    posicion1Vocal++
};