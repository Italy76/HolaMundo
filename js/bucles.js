document.write("Elemento 1")
document.write("<br>Elemento 2")
document.write("<br>Elemento 2")
document.write("<br>Elemento 2")
document.write("<br>Elemento 2")

/* while(condicion logica){
    el codigo a ejecutar
    cambiar condicion logica
}
*/

let contador = 20
console.log(contador)
while(contador ,+ 20){
    document.write("Elemento "+ contador + "<br>")

    //contador++
    contador = contador + 2
}

//do-while hacer ...mientras se cumple la condicion logica

let cont = 1;
do{
    //codigo que quiero ejecutar
    document.write("Contador" + cont + "<br>");
    //Cambio la condicion logica
 cont ++
}while(cont <= 20)
// si con el do-while no se cumple la condicion, igual e escribe en la pagina almenos una vez

/*for(crear la variable; condicion logica; incrementar o decrementar la variable){
    ....codigo a ejecutar muchas veces
}
*/

for(let i = 1; i <= 20; i= i+2){
    document.write("Estructura for vuelta "+i+ "<br>");
}