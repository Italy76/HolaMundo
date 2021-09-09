let ciudades = [];
let contador = parseInt(prompt("¿Cuantos nombres de ciudades ingresará?"));
let i = 0;
let apa = 0;
while (contador > i) {
  let nombre = prompt(
    "Ingrese el nombre de una ciudad (que no sea Paris ni Barcelona)"
  );
  if (nombre != 0) {
    ciudades.push(nombre);
  }
  if (nombre == 0) {
    document.write("El array completo es: " + ciudades);
    document.write(
      "<br>En el array hay: " + ciudades.length
    );
    let last = ciudades[ciudades.length-1]
    document.write(
      "<br>La primer ciudad ingresada es: " +
        ciudades[0] +
        " ,la tercer ciudad ingresada es: " +
        ciudades[3] +
        " ,y la ultima es: " +
        last
    );
    document.write("<br>La ciudad que ocupa la posicion dos es: " + ciudades[2]);
    ciudades[2] = "Barcelona";
    document.write("<br>La ciudad en la posicion dos ahora es: " + ciudades[2]);
    document.write("<br>El nuevo array con Barcelona en la posicion dos es: " + ciudades);
    ciudades[ciudades.length - 1] = "Paris";
    document.write("<br>Se agrego Paris en la ultima posicion")
    document.write(
      "<br>El nuevo array con Paris en la ultima posicion es: " + ciudades
    );
    apa++;
    break;
  }
  i++;
}
let last = ciudades[ciudades.length-1]
if (apa == 0) {
  document.write("El array completo es: " + ciudades);
  document.write(
    "<br>La cantidad de ciudades en el array es de: " + ciudades.length
  );
  document.write(
    "<br>La primer ciudad ingresada es: " +
      ciudades[0] +
      " ,la tercer ciudad ingresada es: " +
      ciudades[3] +
      " ,y la ultima es: " +
      last
  );
  document.write("<br>La ciudad que ocupa la posicion dos es: " + ciudades[2]);
  ciudades[2] = "Barcelona";
  document.write("<br>La ciudad en la posicion dos ahora es: " + ciudades[2]);
  document.write("<br>El nuevo array con Barcelona en la posicion dos es: " + ciudades);
  ciudades[ciudades.length - 1] = "Paris";
  document.write("<br>Se agrego Paris en la ultima posicion")
  document.write(
    "<br>El nuevo array con Paris en la ultima posicion es: " + ciudades
  );
}