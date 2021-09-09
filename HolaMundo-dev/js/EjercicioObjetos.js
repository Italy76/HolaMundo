let Auto = {
    marca: "Ford",
    modelo: "Fiesta",
    color: "blanco",
// Métodos.
    autoEncendido:function(){
        return true
    },
    autoApagado: ()=>{
        return false
    }
};

function mostrarAuto(){
    document.write("Autos<br>")
    let mostrar = Object.keys(Auto) // Muestra todas las propiedades del objeto.
    for(i=0; i<mostrar.length; i++){
        let clave = mostrar[i]
        document.write(`<br>${clave}: ${Auto[clave]}`)
     
    }
}

mostrarAuto()

