/* 
switch(variable){
    case 1:
        //todo el codigo necesario si la opcion que eligio el usuario es 1
        break;
        case 2:
            // todo el codigo necesario si la opcion que eligio el usuario es 2
            break;
            case "otros"
            //todo el codigo necesario si la opcion que eligio el usuario es otros
            break;
            default:
                // codigo a ejecutar por defecto
}

*/

let estacion = prompt(
  "Ingrese su estacion del anio preferida: 1- verano, 2- invierno, 3- otonio, 4- primavera"
);
switch(estacion){
    case "1":
        document.write("El usuario selecciono la estacion Verano");
        break;
    case"2":
        document.write("El usuario selecciono la estacion Invierno");
        break;
        case "3":
            document.write("El usuario selecciono la estacion Otonio");
        break;
        case "4":
            document.write("El usuario selecciono la estacion Primavera");
        break;
        default:
            alert ("Ingrese un valor invalido");
}
/* En este switch los casos contemplan texto. La variable es un prompt, por lo tanto da lugar 
a una cadena de texto. El usuario debe selecconar entre numeros 1, 2, 3, 4, que son com texto. Por eso
en los varios case los numros estan escritos con "" ("1", "2", "3", "4".)
*/