/*Sirven para almacenar mas de un valor en una variable. Puedo guardar cualquier tipo de datos: booleanos,
 numericos, etc. Pero en cada compartimento va un solo valor, dentro de la caja grande que es la variable.
 Como en la cadena de texto, asi las posiciones de los arreglos en la cajita parte desde la posicion cero (0)
*/
//Crear un arreglo con datos.

let series = ["Naruto", "Good doctor", "Juego de tronos", 2, 8, true];
//El arreglo se reconoce por los corchetes. Separar con coma en su interior.
//Mostrar un valor de un arreglo.
document.write(series[2]);
// 2 es la posicion de Huego de tronos. Los corchetes van pegados al nomnre de la variable.
// Crear un arreglo vacio. Sirve no todavia no tenemos los datos.
let temporadas = []
//agregar un elemento al final del arreglo: nombre arreglo.push
series.push("Dr. House")
//Contar los elementos que tiene el arreglo: length
console.log(series.length);
document.write("<br>"+ series[6]);

//Recorrer cada elemento de un arreglo.
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Serie:"+ series[posicion])
}
/*La variable (en este caso posicion no puede ser menor igual (<=) a length, sino que solo menor(<)
porque recordemos que length cuenta todas las posiciones, desde 1, mientras las posiciones arrancan desde
cero (0).*/

//Agregar un elemento en una posicion particular: nombre arreglo.splice
series.splice(1,0,"Loki");
/* nombre arreglo.series(posicion donde quiero insertar el nuevo dato, numero de datos que quiero borrar
    desde la posicion en donde quiero insertar el nuevo dato,  nombre del dato que quiero agregar).*/
   
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Serie:"+ series[posicion])
}

//Eliinar uno o varios elementos de una posicion particular del arreglo.
series.splice(4,2);
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Serie:"+ series[posicion])
}

//Modificar un elemento desde ua posicion particular del arreglo.
series[4] = "Vikingos"
/*Nombre de Arreglo[posicion en que queremos hacer modificacion] = nombre asignado,
puede usarse todo tipo de dato(numeros, cadena de texto, etc.).*/
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Serie:"+ series[posicion])
};





/*Eliminar todos los elementos desde una posicion particular.
series.splice(2) --- En este caso, usando un solo valor dentro las parentesis, splice elimina todos
los elementos a partir de la posicion del arreglo indicada (en esta caso 2).
*/
