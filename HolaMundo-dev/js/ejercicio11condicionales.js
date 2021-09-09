let numero = prompt("Insertar un numero");

//Condicional.
if(numero % 2 == 0){
    document.write("Es divisible por 2");
}else if(numero % 3 == 0){
    document.write("Es divisible por 3");
}else if(numero % 5 == 0){
    document.write("Es divisible por 5");
}else if(numero % 7 == 0){
    document.write("Es divisible por 7")
}else{
    console.warn("No es divisible ni por 2, ni por 3, ni por 5, ni por 7")
};