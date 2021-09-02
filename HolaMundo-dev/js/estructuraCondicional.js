let numero1 = parseInt (prompt("Ingrese un primer numero"));
let numero2 = parseInt (prompt("Ingrese un segundo numero"));
document.write ("Numero 1= "+numero1);
document.write ("<br> Numero 2= "+numero2);

// Estructura if 
/* if(condicion logica && condicion logica || condicion logica){
codigo a ejecutar si la respuesta es verdadera o true
}
*/

if(numero1 > numero2){
    document.write ("<br> El numero 1 es mayor que el numero 2");
}else if(numero1 == numero2){
    document.write("El numero 1 y el numero 2 son iguales")
}
else{
    //codigo a ejecutar si no se cumple la condicion
    document.write("<br> El numero 2 es mayor que el numero 1")
}

//console.log sirve para visualizar en la consola las variables y/o los resultados
console.log('hola')
console.log(numero1)


