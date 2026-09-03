const alumnos = require("../data/alumnos")

function obtenerAlumnos(req, res){  //Ruta donde se tomara la informacion  //req = request/pregunta/solicitud, res = respond/responder
    res.json(alumnos)
}

function obtenerAlumno(req, res){
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno)
} 

function crearAlumno(req, res){
    const nuevoAlumno = req.body
    alumnos.push(nuevoAlumno)
    res.json({mensaje: "alumno registrado correctamente"})
}

function actualizarAlumno(req, res){
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id) //compara alumno id con el id del params
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})
}

function eliminarAlumno(req, res){
    const id = Number(req.params.id)
    const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id)
    alumnos.length = 0
    alumnos.push(...alumnosActualizados)
    res.json({mensaje: "Alumno eliminado correctamente"})
}

module.exports = {obtenerAlumnos,obtenerAlumno,crearAlumno,actualizarAlumno,eliminarAlumno}