do{
    let nota = prompt("Introduce tu nota");
    if (Number(nota) == nota){
        if (nota > 0 && nota <= 10){
            if (nota < 3){
                alert("Muy deficiente");
            }
            else if (nota < 5) {
				alert("Insuficiete");
			}
            else if (nota <= 6) {
				alert("Suficiente");
			}
            else if (nota <= 7) {
				alert("Bien");
			}
            else if (nota <= 9) {
				alert("Notable");
            }
            else if (nota <= 10) {
				alert("Sobresaliente");
			}
    }
    else{
        alert('Numero erroneo')
    }
}
else{
    if (nota != undefined){
        alert("Introduce un numero valido");
    }
}
}while(nota != undfined);

//Usar <= para indicar la nota maxima para que salga ese mensaje