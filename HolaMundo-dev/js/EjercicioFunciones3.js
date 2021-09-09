let lado1 = parseInt(prompt("Indicar la medida del lado"));
let lado2 = parseInt(prompt("Indicar la medida del lado"));

//Creo la función.
function calculo(lado1,lado2){
    let perimetro = 2* (lado1 + lado2);
    document.write("El perímetro es de "+ perimetro + " cm.")
    return perimetro
}
//Llamo la función.
calculo(lado1,lado2);

