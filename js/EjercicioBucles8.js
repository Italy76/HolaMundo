do{
    let i;
    let numero = prompt("Introducir un numero");
    if(Number(numero)==numero){
        if(numero > 0 && numero <= 50){
            let rep= 0;
            for(i = 0; i <= numero; i++){
                for(rep = 1; rep <= i; rep++){
                    document.write (rep);
                }
                document.write("<br>");
            }
        }else{
            alert("Introducir un numero valido");
        }
        
    }else{
        if(nuemro != undefined){
            alert("Introducir un valor correcto;")
        }
    }
}while(numero !=udefined);