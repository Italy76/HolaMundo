let numero = parseInt(prompt("Introducir un número"));

if(Number(numero) == numero){
    if(numero >= 1 && numero <= 50){
        for(i= 0; i<=numero; i++){
            for(pos=1; pos<=i; pos++){
                document.write(pos)
            }
            document.write("<br>");
        }
    }else{
        alert("Introducir un número entre 1 y 50")
    }
}else{
    alert("El valor no es un número")
};