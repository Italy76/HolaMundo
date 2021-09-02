let frase = prompt ("Ingrese una frase");
console.log(frase);
//frase.lenght = devuelve la cantidad de caracteres
//frase.charAt(indice)
let nFrase = frase.length;
let i;
for(i = 0; i < nFrase; i++){
   if(frase.substr(i,1) === "a" || frase.substr(i,1) === "e" || frase.substr(i,1) === "i"
   || frase.substr(i,1) === "o" || frase.substr(i,1) === "u") {
       document.write (frase.substr(i,1));
   }
}
