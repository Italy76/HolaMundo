/* 
switch(operacion){
    case 1:
        //todo el codigo necesario si la opcion que eligio el usuario es 1
        break;
        case 2:
            // ...
            break;
            case "otros"
            ....;
            break;
            default:
                // codigo a ejecutarpor defecto
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
            alert ("Ingreso un valor invalido");
}