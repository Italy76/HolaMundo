let dado1 = ["1", "2", "3", "4", "5", "6"];
let dado2 = ["1", "2", "3", "4", "5", "6"];
let resultado = []

for(i = 1; i <= 50; i++){
    let lanzamiento1 = Math.floor(Math.random(dado1)*6)+1;
    let lanzamiento2 = Math.floor(Math.random(dado1)*6)+1;
    let suma = lanzamiento1 + lanzamiento2;
    document.write("<br>primer dado lanzado: " + lanzamiento1);
    document.write("<br>primer dado lanzado: " + lanzamiento1);
    document.write("<br>");
    resultado.push(suma)
}
document.write("<br>Array: " + resultado);