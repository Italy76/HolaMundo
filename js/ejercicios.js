alert("un mensaje");
document.write("Hello World");
document.write(3+5);
let nombre = prompt("NombreUsuario")
document.write("<br>Hola "+nombre)
/* parseInt("numero"). Transforma numero que esta en formato texto entre comillas, 
en numero real para operaciones matematicas. esta funcion evita concatenar, porque 
sabemos que si tenemos el signo de + entre numero y texto, no suma, sino que
concatena.*/
let numero1 = parseInt(prompt("Ingrese primer numero"))
let numero2 = parseInt(prompt("Ingrese segundo numero"))
//poner parentesis entre los dos numeros, sino, en presecia de un texto, los + concatenan.
//El espacio en la ultima comilla sirve para dar espacio en eltexto que aparece en la pagina
document.write ("La suma es "+ (numero1 + numero2))
