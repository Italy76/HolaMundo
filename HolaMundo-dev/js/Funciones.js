//FUNCION: sirven para escribir un codigo que quiero ejecutar muchas veces en un solo lugar.

//Funciones sin parametros.
function holaMundo(){
    //todo el codigo que quiero que tenga la funcion.
    //Las funciones no se ejecutan si no son llamadas. No es suficiente declararlas.
    document.write("Hola Mundo");
}

//Funciones con parametros.
/*Todo lo que se escribe dentro de los parentesis de una funcion son paramertros. Ellos son
variables que creamos, sin usar var, let o const. Aceptan valores desde afuera. Usar nombres de 
parametros que sean descriptivos. */
function saludar(nombre, apellido){
    document.write("<br>Hola, mi nombre es:" + nombre + " y mi apellido es: "+ apellido);
}
//Dentro de los parentesis pongo los valores que quiero recibir desde el exterior.
//Ejecutar o invocar o llamar una funcion.
holaMundo();

//Funciones que nos retornan un valor.
//function convertirDolaresPesos(dolares){
  //  let pesos = dolares * 190;
    //console.log(pesos)
    //No escribir nada bajo la linea de codigo return.
    //return pesos;
// }

//Arrow function o funciones en forma de flecha.
/*
 let nombreFuncion = (parametro1, parametro2) => {
    codigo de la funcion
 }
 De esta forma se pueden escribir funciones sin parametro (parentesis vacias), con parametro o con retorno 
 de valor.
 Dentro de las llavecitas se escribe exactamente como en la forma extensa.
*/

let convertirDolaresPesos = (dolares) => {
    let pesos = dolares * 190
    console.log (pesos);
    return pesos;
}

//Llamar una funcion con paramtros.
saludar("Esteban", "Marquez");
saludar("Juan","Alaniz")

let nombre = prompt("Ingrese un nombre");
let apellido = prompt("Ingrese un apellido");
saludar(nombre, apellido)
/*Hemos creado estas variables fuera de las funciones. Fue posible porque solo existian dentro de la
funcion, o sea eran variables locales. Toda variable creada fuera es global. Las variables globales
tienen validez a partir de donde han sido creadas.*/

/* La variable var es solo global, o sea, no puede ser usada dentro de un bucle, 
de una funcion, de un if, etc. La variable let es local, y puede usarse tambien 
como global. Se recomienda no usar la variable var nunca.*/

let precioIphone = convertirDolaresPesos(599)
document.write("<br>Iphone SE $" + precioIphone)
document.write("<br>Jordan $"+ convertirDolaresPesos(200));
// Como se ve, en el document write podemos llamar a la variable o a la funcion.

