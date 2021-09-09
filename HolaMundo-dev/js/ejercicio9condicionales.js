let frase = prompt("Escriba una frase");
// frase.length: nos dice el numero de caractres presentes en la frase.
//Recorrer la frase con un bucle.
for(let i=0; i <frase.length; i++){
    let vocales = frase.charAt(i);
    //Uso una estructura Switch anidada en el bucle for.
    switch(vocales){
        case "a":
            document.write(frase.substr (i,1) + "<br>")
            break;
        case "e":
            document.write(frase.substr(i,1) + "<br")
            break;
        case "i":
            document.write(frase.substr(i,1)+ "<br>")
            break;
        case "o":
            document.write(frase.substr(i,1)+ "<br>")
            break;
        case "u":
            document.write(frase.substr(i,1)+ "<br>")
            break;
            default:
                console.log("No es una vocal");
    }
};


