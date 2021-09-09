//empiezo con crear variable del resultado final requerido.
let resultado = 0;
// Escribo un do{}while(). Dentro de esta estructura procedo con una condición.
// Creo variable que pida numero, y lo parseo para que el contenido del prompt sea numérico.
// if(los numero introducidos son numeros -uso la funcion Number-), la variable final (resultado) se conca-
//-tena con la variable numeros.
// En caso contrario (else), aparece el alert.
// Todo esto se ha de hacer mientras (while) se pida confirmar si se quiere seguir introduciendo numeros 
// o bien pulsar "Cancelar" y visualizar la suma de los numeros introducidos.
do{
    let numeros = parseInt(prompt("Introducir un numero"))
    if(numeros == Number(numeros)){
        resultado = resultado + numeros
    }else{
        alert("No es un numero")
    }
}while (confirm("¿Quiere continuar?"))
    document.write(resultado);
