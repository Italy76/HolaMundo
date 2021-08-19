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

//Ejercicio 6
if(numero1 > numero2){
    document.write("<br> El numero 1 es mayor del numero 2")
}else{
    document.write("<br> El numero 2 es mayor del numero 1")
}
//Ejercicio 7
let numero3 = parseInt (prompt("Ingrese un tercer numero"));
document.write ("<br> Numero 3= "+numero3);
if(numero1 > numero2 && numero1 > numero3){
    document.write("<br> El numero mayor es el numero 1")
}else if(numero2 > numero1 && numero2 > numero3){
    document.write ("<br> El numero mayor es el numero 2")
}else {
    document.write ("<br> El numero mayor es el numero 3")
}
//Ejercicio 8
if(numero1 % 2 == 0){
    document.write ("<br> El numero es divisible por 2")
}
//Ejercicio 10
if(numero1 % 2 == 0 || numero1 % 3 == 0 || numero1 % 5 == 0 || numero1 % 7 == 0){
    document.write ("<br> El numero es divisible por 2, 3, 5, o 7")
}
// el else se puede usar solo con un if: por cada if hay un else.