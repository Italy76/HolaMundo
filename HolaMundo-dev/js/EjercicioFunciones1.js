//Declaro variable.
let numero = parseInt(prompt("Ingresar un número entero"));


//Declaro la función.

function entero(numero) {
    if(numero % 2 == 0){
        document.write("El número es par.")
    }else{
        console.warn("Número impar")
    }
};
// LLamo la función.
entero(numero);
