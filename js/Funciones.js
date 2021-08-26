//FUNCION: sirven para escribir un codigo que quiero ejecutar muchas veces en un solo lugar.

//Funciones sin parametros.
function holaMundo(){
    //todo el codigo que quiero que tenga la funcion.
    //Las funciones no se ejecutan si no son llamadas. No es suficiente declararlas.
    document.write("Hola Mundo");
}

//Funciones con parametros.
/*Todo lo que se escribe dentro de los parentesis de una funcion son paramertros. Ellos son
variables que creamos, sin usar vae, let o const.*/
function saludar(nombre, apellido){
    document.write("<br>Hola, mi nombre es:"+ nombre + "y mi apellido es:"+ apellido);
}
//Dentro de los parentesis pongo los valore que quiero recibir desde el exterior.
//Ejecutar o invocar o llamar una funcion.
holaMundo();
