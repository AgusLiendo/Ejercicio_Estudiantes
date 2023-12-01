//Llamar librerias
const readlineSync = require('readline-sync');
const {mostrarEstudiantes} = require('./Lista_Estudiantes')

const registrarEstudiantes = () => {
    const cantidad = readlineSync.question("Ingrese la cantidad de estudiantes a registrar: ");
    const estudiantes = [];

    for (let i = 0; i < cantidad; i++) {
        let r = i+1;

        const nombre = readlineSync.question("Ingrese el nombre del estudiante " + r + ": ");
        const edad = readlineSync.question("Ingrese la edad del estudiante " + nombre + ": ");

        const estudiante = {
            nombre,
            edad
        };;
        estudiantes.push(estudiante);
    };

    mostrarEstudiantes(estudiantes);

};

//Llamar registro
registrarEstudiantes()