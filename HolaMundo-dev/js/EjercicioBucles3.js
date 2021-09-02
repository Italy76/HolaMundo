let final="";
do{
    let cadenaTexto = prompt("Escribir una cadena de texto")
    if(final == ""){
        final = final + cadenaTexto;
    }
    else{
        final = final + "-" + cadenaTexto
    }
}while(confirm("Quiere continuar?"));
document.write(final);