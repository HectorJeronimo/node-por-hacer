const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente una tarea recibe true o false'
}

const argv = require('yargs')
    .command('crear', 'Crea una actividad por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una actividad de la base de datos', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
};