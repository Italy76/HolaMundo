//Crear una clase.
// Mejor que los nombres de las clases empiecen por letra mayúscula.
class Funkopop{
    // aqui comienzo a crear mi clase o molde. Se usa un método (= función), el constructor.
    constructor(nombreFunko, precio, version, numSerie){
        //Crear estructura del objeto.
        this.nombre = nombreFunko; // this hace referencia al objeto que existirá. Se usa el punto para separarlo
        // del nombre de la propiedad, no los : como en la notación literal.
        this.precio = precio;
        this.version = version;
        this.numSerie = numSerie;
        this.disponible = true // Puedo crear propiedades más allá de la función constructor: propiedad por defecto.
// Si el valor del parámetro no va a variar se puede escribir fuera de parámetros de la función constructor;
// si al contrario, se cree que ese valor puede ser cambiado por el usuario, escribirlo dentro de la constructor.
    }
    // Crear métodos a parte del método constructor, pero DENTRO de la misma clase.
    mostrarDatos(){  // Usamos un método son parámetros porque estamos en la misma clase donde se indican.
         document.write(`<h5>Funkopop</h5>
         Nombre: ${this.nombre} 
         <br>Precio: ${this.precio}
         <bbr>Versión: ${this.version}
         <br>Número de serie: ${this.numSerie}
         <br>Disponible: ${this.disponible}`)
    }
    //Propiedades conmitadas: para obtener o modificar un valor. get y set. NUNCA llamarlas como las propiedades.
   get mostrarNombre(){ //el git solo permite visualizar una propiedad, sin modoficarlas.
       return this.nombre // dentro de la clase es necesario usar siempre el this para llamar a las propiedades.
   }
   get mostrarPrecio(){
       return this.precio
   }
   set modificarPrecio(precioNuevo){ //Esta vez se usa un parámetro para indicar el cambio de valor.
       this.precio = precioNuevo;
   }
}

class Persona {
    constructor(nombre, apellido, dni, mail, telefono, edad){
        this.nombre = nombre;
        this.apellido =apellido;
        this.dni = dni;
        this.mail = mail;
        this.telefono = telefono;
        this.edad = edad;
    }
        //Creo método, para visualizar las propiedades de este objeto.
        mostrarDatos(){
            document.write(
            `<br>Nombre: ${this.nombre}
            <br> Apellido: ${this.apellido}
            <br>Dni: ${this.dni}
            <br>Email: ${this.mail}
            <br>Teléfono: ${this.telefono}
            <br>Edad: ${this.edad}`)
        }

    }

    //alumno: notas, uruario, contraseña, matricula, comision.
    //tutor: usuario, contraseña, legajo, comision.

//se usan para crear muchos objetos iguales, o bien uno pero sabiendo que voy a usar muchos como él.
// Es alternativa a la escritura de un objeto en notación literal.
// Hay que indicar los this en los métodos DENTRO de la clase. Fuera de la clase el this no se usa jamás.
console.log("prueba");

//Crear una instancia de un objeto.
let strange = new Funkopop("Stephen Vincent Strange", 5000, "End game", "djhk3346");
let Hulk = new Funkopop("David Banner", 5000, "End game", "jsh122");
let ViudaNedra = new Funkopop("Natasha Ronanoff", 5000, "End game", "ksj233");
console.log(strange);

// Usar el método interno a la clase, mostrarDatos. -- nombreObjeto.metodo()
strange.mostrarDatos(); // Ahora este método es solo para el objeto creato strange.
Hulk.mostrarDatos();
ViudaNedra.mostrarDatos();

//Utilizar (llamar) propiedades conmutadas. 
document.write("<br>Propiedad Nombre: " + strange.mostrarNombre);
document.write("<br>Mostrar precio anterior: $"+ strange.mostrarPrecio);

//Modificar propiedad de un objeto: set.
strange.modificarPrecio = 6000;
document.write("<br>Mostrar precio nuevo: $"+ strange.mostrarPrecio) // Usamos el set qu usamos antes, solo 
//para visualizar el precio, pero en la línea anterior modificamos ese valor, por lo tanto en la página vamos
//a visualizar el precio modificado.

let juan = new Persona("Juan", "Alaniz", 33484859, "jalaniz@gmail.com", "1142779875", 35);
let abel = new Persona("Abel", "Cordoba", 34843859, "acordoba@gmail.com", "1157789123", 34);
// Visualizo los dos objetos (let juan y let abel) que acabo de crear.
juan.mostrarDatos();
abel.mostrarDatos();
