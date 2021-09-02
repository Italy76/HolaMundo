let nombre = "Tony Stark";
let numSerie = "123gsd2";
let precio = 5000;
let version = "end-game";

//Crear un objeto con notacion literal.
let funkoIronMan = {
  // clave: valor ------ son propiedades.
  nombre: "Tony Stark",
  numSerie: "123gsd2",
  precio: 5000,
  version: "end-game",
};

//Mostrar objeto.
console.log(funkoIronMan)

//mostrar una propiedad del objeto forma 1.
document.write ("articulo funkopop" + funkoIronMan);

// mostrar una propiedad del objeto forma 2.
document.write("<br>Precio $"+ funkoIronMan["precio"]);

// mostrar todas las propiedades del objeto.
let claves = Object.keys(funkoIronMan);
console.log(claves);