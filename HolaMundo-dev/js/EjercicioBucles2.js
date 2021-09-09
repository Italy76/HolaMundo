let nota = prompt("Insertar nota:");
if(nota <= 2){
    alert("Muy deficiente");
}else if(nota <= 4){
    alert("Insuficiente");
}else if(nota <= 6){
    alert("Suficiente");
}else if(nota == 7){
    alert("Bien");
}else if(nota <= 9){
    alert("Notable");
}else if(nota == 10){
    alert("Sobresaliente");
}else if(nota < 0 || nota > 10){
    console.log("Numero erroneo");
}else{
    console.log("Introduce un numero valido")
};
    
