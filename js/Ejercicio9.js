let frase = prompt ("Ingrese una frase");
console.log(frase);
//frase.lenght = devuelve la cantidad de caracteres
//frase.charAt(indice)
let nfrase = text.length;
for(let i = 0; i < nfrase; i++){
   if(frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i"
   || frase.substr(i,1) === "o" || frase.substr(i,1) === "u") {
       document.write (frase.substr(i,1));
   }
}
