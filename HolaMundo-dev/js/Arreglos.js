/*Sirven para almacenar mas de un valor en una variable. Puedo guardar cualquier tipo de datos: booleanos,
 numericos, etc. Pero en cada compartimento va un solo valor, dentro de la caja grande que es la variable.
 Como en la cadena de texto, asi las posiciones de los arreglos en la cajita parte desde la posicion cero (0)
*/
//Crear un arreglo con datos.

let series = ["Naruto", "Good doctor", "Juego de tronos", 2, 8, true];
//El arreglo se reconoce por los corchetes. Separar con coma en su interior.
//Mostrar un valor de un arreglo.
document.write(series[2]);
// 2 es la posicion de Juego de tronos. Los corchetes van pegados al nombre de la variable.
// Crear un arreglo vacio. Sirve, todavia no tenemos los datos.
let temporadas = [];

//Funcion para mostrar los elementos del arreglo.

let mostrarSeries = () => {
  for (let posicion = 0; posicion < series.length; posicion++) {
    //document.write("<br>Serie:"+ series[posicion])
    //Sintaxis con los vartix: sustituyen las otras comillas y eliminan el +.
    document.write(`<br> Serie: ${series[posicion]} - posicion: ${posicion}`);
  }
  // Esta funcion es sin parametro, ya que el array serie, que es una variable, esta arriba por lo tanto
  //plenamente disponible para el resto de la pagina de js.
  // Copie la condicional for dentro de las llaves.
  document.write("<br>");
};

// Funcion tradicional para mostrar elementos del arreglo.

function mostrarSeriesNetflix() {
  //recorrer a cada elemento de un arreglo.
  document.write("<br><h3>Arreglo de series</h3>");
  for (let posicion = 0; posicion < series.length; posicion++) {
    document.write("<br>serie: " + series[posicion]);
  }
}

//agregar un elemento al final del arreglo: nombre arreglo.push
series.push("Dr. House");
//Contar los elementos que tiene el arreglo: length
console.log(series.length);
document.write("<br>" + series[6]);

//Recorrer cada elemento de un arreglo.
//for(let posicion = 0; posicion < series.length; posicion++){
//document.write("<br>Serie:"+ series[posicion])
//}
/*mostrarSeries()*/ mostrarSeriesNetflix();
/*La variable (en este caso posicion no puede ser menor igual (<=) a length, sino que solo menor(<)
porque recordemos que length cuenta todas las posiciones, desde 1, mientras las posiciones arrancan desde
cero (0).*/

//Agregar un elemento en una posicion particular: nombre arreglo.splice
series.splice(1, 0, "Loki");
/* nombre arreglo.splice(posicion donde quiero insertar el nuevo dato, numero de datos que quiero borrar
    desde la posicion en donde quiero insertar el nuevo dato,  nombre del dato que quiero agregar).*/

//for(let posicion = 0; posicion < series.length; posicion++){
//document.write("<br>Serie:"+ series[posicion])
//}
/*mostrarSeries()*/ mostrarSeriesNetflix();

//Eliinar uno o varios elementos de una posicion particular del arreglo.
series.splice(4, 2);
//for(let posicion = 0; posicion < series.length; posicion++){
// document.write("<br>Serie:"+ series[posicion])
//}
/*mostrarSeries()*/ mostrarSeriesNetflix();

//Modificar un elemento desde una posicion particular del arreglo.
series[4] = "Vikingos";
/*Nombre de Arreglo[posicion en que queremos hacer modificacion] = nombre asignado,
puede usarse todo tipo de dato(numeros, cadena de texto, etc.).*/
//for(let posicion = 0; posicion < series.length; posicion++){
//document.write("<br>Serie:"+ series[posicion])
//};
/*mostrarSeries();*/ mostrarSeriesNetflix();

/*Eliminar todos los elementos desde una posicion particular.
series.splice(2) --- En este caso, usando un solo valor dentro las parentesis, splice elimina todos
los elementos a partir de la posicion del arreglo indicada (en esta caso 2).
*/
