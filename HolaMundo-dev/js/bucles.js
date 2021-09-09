/*document.write("Elemento 1");
document.write("<br>Elemento 2");
document.write("<br>Elemento 3");
document.write("<br>Elemento 4");
document.write("<br>Elemento 5");
document.write("<br>Elemento 6<br>");*/

//Bucles: sirven para repetir muchas lineas de codigo a la vez.

/* la rama dev de GitHub e una suerte de rama master secudaria hecha para probar. 
Sobre la dev se crean las ramas, respaldando la master.*/

/* while(condicion logica){
    el codigo a ejecutar
    cambiar condicion logica
}
*/
/*Llegado al final, el while se vuelve a repetir. Po eso en algun momento 
hay que cambiar la condicion logica para detener el bucle*/
// Cuando se trabaja con bucles, es recomendable desactivae Live Server.

let contador = 2
console.log(contador)
while(contador <=20){
    document.write ("Elemento "+ contador + "<br>");
   /* contador ++ */contador = contador +2;
}
/* Si quiero imprimir solo los numeros pares, let contador = 2, y usar contador = contador + 2 */
/* Podemos agregar todos los + que queramos para concatenar. El <br> va despues 
porque aplicamos el salto de texto tras haber concatenado el valor de la clase contenedor.*/

//do-while hacer ...mientras se cumple la condicion logica

let cont = 100;
do{
    //codigo que quiero ejecutar
    document.write("Contador" + cont + "<br>");
    //Cambio la condicion logica
 cont--
}while(cont >= 20)
// si con el do-while no se cumple la condicion, igual e escribe en la pagina almenos una vez
/*Para decrementar usar la variable con el signo doble -- o bien -numero a sustraer
 (para incrementar usar doble ++). En el while indicar
variable >=.
*/

/*for(crear la variable; condicion logica; incrementar o decrementar la variable){
    ....codigo a ejecutar muchas veces
}
*/

for(let i = 1; i <= 20; i= i+2){
    document.write("Estructura for vuelta "+i+ "<br>");
}