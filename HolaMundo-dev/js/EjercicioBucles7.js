let i, pos;
let numero = parseInt(prompt("Ingresar número"));
if(Number(numero == numero)){
    if(numero >= 1 && numero <=50){
        for(i = numero; i>= 1; i--){
           for(pos = numero; pos >= 1; pos--){
               document.write(i)
           }
           document.write("<br>")
        }
        
    }else{
        alert("Ingresar un numero entre 1 y 50")
    }

}else{
    alert("ingrese un valor numerico")
}