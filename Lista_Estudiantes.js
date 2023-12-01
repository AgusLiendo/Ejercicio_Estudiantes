const mostrarEstudiantes = (estudiantes) => {
    console.log("Listado de estudiantes:")
    console.log(" ")

    estudiantes.forEach((estudiante) => {
        console.log("Nombre: " + estudiante.nombre + " Edad: " + estudiante.edad);
        
    });
}

module.exports = {mostrarEstudiantes};