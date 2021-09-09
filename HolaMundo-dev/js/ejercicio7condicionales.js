let numero1 = prompt("Insertar primer numero");
let numero2 = prompt("Insertar segundo numero");
let numero3 = prompt("Insertar tercer numero");

//Definir condicional.
if(numero1 > numero2 && numero1 > numero3){
    document.write("El primer numero es el mayor")
}else if(numero2 > numero1 && numero2 > numero3){
    document.write("El segundo numero es el mayor")
}else {
    document.write("el numero 3 es el mayor")
};
