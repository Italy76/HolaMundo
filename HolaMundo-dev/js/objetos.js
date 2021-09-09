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
  //crear un metodo. El metodo es una funcion.
  sinStock: function () {
    return false;
  }, // Se pone la coma porque estamos dentro del objeto, y con coma se separan las varias funciones anonimas.
  tengoStock: () => {
    return true;
  }
};



//Mostrar objeto. propiedad= clave +valor de esa clave.
console.log(funkoIronMan)

//mostrar una propiedad del objeto forma 1: objeto.nombrepropiedad
document.write ("Articulo Funkopop" + funkoIronMan.nombre);

// mostrar una propiedad del objeto forma 2.
document.write("<br>Precio $"+ funkoIronMan["precio" + "<br>"]); //No confundamos con el arreglo, por los corchetes.
//En el arreglo lo que está dentro corchetes indica la posición, en los objetos indica nombre de propiedad.

// mostrar todas las propiedades del objeto.
let claves = Object.keys(funkoIronMan); // ["nombres, numSerie, ...."]. Se crea una variable, se la denomina
// como Object.keys(nombre del objeto). -> Nos da un arreglo que muestra en el console.log todas las claves.
console.log(claves);
console.log(claves.length); // Nos da el número de claves de ese objeto.

//Mostrar el objeto completo con todas sus propiedades.

for(i= 0; i< claves.length; i++) {
  //obtengo el nombre de cada una de las claves con let clave = claves[i]
  let clave = claves[i]
  document.write(`<br> ${clave}: ${funkoIronMan[clave]}`)
}

//modificar una propiedad de mi objeto.
funkoIronMan.precio = 5500
mostrarObjeto()

//agregar una propiedad a un objeto.
funkoIronMan.disponible = true;
mostrarObjeto()

//llamar a un metodo. Llamamos la función anónima del objeto. console.log(nombreObjeto.método()).
console.log(funkoIronMan.sinStock());

function mostrarObjeto(){
  document.write ("<br>funkoIronman<br>")
  // mostrar todas las propiedades del objeto.
let claves = Object.keys(funkoIronMan); // ["nombres, numSerie, ...."] ---agregar esta linea de codigo que 
//informa de las propiedades del objeto en la funcion, asi cuando hacemos una modificación siempre se queda
//actualizado. ---Usarlo siempre dentro de la función, así será siempre actualizado.
console.log(claves);
  for(i= 0; i< claves.length; i++) {
    //obtengo el nombre de cada una de las claves con let clave = claves[i]
    let clave = claves[i]
    document.write(`<br> ${clave}: ${funkoIronMan[clave]}`)
  }
}

//Borrar una propiedad de un objeto. delete nombreObjeto.propiedad.
delete funkoIronMan.version;

mostrarObjeto()
