//declaro la variable del resultado final (resto de división entre número introducido y 23).
//Declaro la variable de la letra del DNI.
let resto = 0;
let letra = "";

// Usar el do{}while() para especificar qué hacer y con cuales condiciones (if).
do{
    //Definir el cuadro donde introducir el número de DNI.
    let numero = prompt("Introducir su número de DNI");
    // Condicion para que el valor introducido en la prompt sea un numero.
    if(Number(numero) == numero){
        numero = Number(numero);
        //If anidado que dice entre que valores deBE estar comprendido el numero a introducir.
        if(numero >= 0 && numero <= 99999999){
            //Resto que debe dar dividiendo el numero por 23.
            resto = numero % 23;
            //Varias opciones segun sea el valor del resto.
            switch(resto){
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                    alert("Introducir un numero correcto");
            }
        }
        document.write("Numero: "+ numero + " Letra: "+ letra + "<br>");
    }else{
        if (numero != undefined){
            alert("No es un numero");
        }
    }
// confirm para elegir Aceptar o Cancelar. Aceptar: sigue pidiendo insertar números. Cancelar: muestra los
// resultados en la página (mediante el document.write).
} while(confirm("Quiere continuar?")); 
     document.write(resto);

