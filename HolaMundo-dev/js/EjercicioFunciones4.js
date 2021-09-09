let numero = parseInt(prompt("Ingresar un número"));

function tabla(numero){
    for(i=1; i<=10; i++){
        let resultado = i*numero;
        document.write(resultado);
        document.write("<br>");
    };
}
// LLamo la función.
tabla(numero);