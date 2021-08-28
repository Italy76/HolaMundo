let filas = parseInt(prompt("Ingrese un numero de filas"));
let columnas = parseInt(prompt("Ingrese un numero de columna"));
//Multiplicar numero filas * numero columnas para saber cuantos numeros hay. Eso es el numero a decrementar.
let numero = filas * columnas;
console.log(numero);
document.write("<table border>");
/*document.write("<tr>");
document.write("<td>Prueba");
document.write("<td>");
document.write("</tr>");*/
for(let indiceFila = 0; indiceFila < filas; indiceFila++){
     document.write("<tr>")
     //para dibujar las columnas. Bucle anidado.
    for(let indiceColumna = 0; indiceColumna < columnas; indiceColumna++){
        document.write("<td>"+ numero);
        document.write("</td>");
        //Decremento el numero de cada celda.
        numero--
    }
    document.write("</tr>")
};
//si en el for arrancase de 1, luego usaria <=


document.write("</table>");
//La variable numero debe estar fiera de los dos bucles para que sea valida en ambos.
// las variables indiceFila e indiceColumna solo funcionan dentro de las llavecitas de los dos for anidados.
