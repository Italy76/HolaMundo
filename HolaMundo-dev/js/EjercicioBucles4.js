// Declaro la variable suma.
let suma = 0;

// Bucle do while.
do{
   
    //Condicional si se introduce un numero.
    if(Number(numero) == numero){
        numero = Number(numero);
        suma = suma + numero;
    }else{
        //Condicional si se introduce un numero no valido.
        if(numero!= undefined){
            alert("Introducir un numero");
        }   
    }
// Volvamos al do mientras no se selecciona el boton Cancelar.
}while(numero!=undefined);
// ejecutar la suma si se pulsa el boton Cancelar.
document.write(suma);