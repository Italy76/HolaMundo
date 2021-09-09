let edad1 = Number(prompt("Introducir la edad"));
let nombre1 = prompt("Introducir el nombre");
let edad2 = Number(prompt("Introducir la edad"));
let nombre2 = prompt("Introducir el nombre");
let edad3 = Number(prompt("Introducir la edad"));
let nombre3 = prompt("Introducir el nombre");
// Declarar la variable de la edad mayor usando la función Math.max.
let mayor = Math.max(edad1, edad2, edad3);

// Poner condición para contemplar si la edad mayor es la 1, la 2, o la 3.
if(mayor == edad1){
    document.write(nombre1 + " es el de mayor edad")
}else if(mayor == edad2){
    document.write(nombre2 + " es el de mayor edad")
}else if(mayor == edad3 ){
    document.write(nombre3 + " es el de mayor edad")
}