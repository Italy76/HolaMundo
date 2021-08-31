do{
    let i;
    let numero = prompt("Escribir un numero");
    if(Number(numero) == numero){
        if(numero > 0 && numero <= 50){
            let rep = 0;
            for(i= numero; i >= 1; i--){
                for(rep = i; rep >= 1; rep--){
                    document.write(i);
                }
                document.write("<br>");
            }

        }else{
            alert("Insertar un numero valido");
        }
    }else{
        if(numero != undefined){
            alert("Introducir un valor correcto");
        }
    }
}while(numero != undefined);