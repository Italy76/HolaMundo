let texto = prompt("Insertar un texto");

function argumento(texto){
    if(texto == texto.toUpperCase()){
        document.write("Texto todo en mayúsculas");
    }else if(texto == texto.toLowerCase()){
        document.write("Texto todo en minúsculas");
    }else{
        document.write("Texto en mayúsculas y minúsculas");
    }
};
// Llamo la función.
argumento(texto);