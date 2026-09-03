const alumnos = require("../data/alumnos")

function obtenerAlumnos(req, res){  //Ruta donde se tomara la informacion  //req = request/pregunta/solicitud, res = respond/responder
    res.json(alumnos)
}

function obtenerAlumno(req, res){
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    if (!alumno) {
        return res.status(404).json({
            mensaje: "Alumno no encontrado"
        })
    }
    res.json(alumno)
} 

function crearAlumno(req, res){
    const nuevoAlumno = req.body
    const {id, nombre, carrera} = req.body
    if (!id || !nombre || !carrera){
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }
    if (typeof nombre != "string"){
        return res.status(400).json({
            mensaje: "El noombre debe ser un texto"
        })
    }
    alumnos.push(nuevoAlumno)
    res.status(201).json({mensaje: "alumno registrado correctamente"})
}

function actualizarAlumno(req, res){
    const id = Number(req.params.id)
    const alumno = alumnos.find(alumno => alumno.id === id) //compara alumno id con el id del params
    if (!alumno){
        res.status(404).jason({
            mensaje: "Alumno no encontrado"
        })
    }
    alumno.id = req.body.id
    alumno.nombre = req.body.nombre
    alumno.carrera = req.body.carrera
    res.json({mensaje: "Alumno actualizado correctamente"})
}

function eliminarAlumno(req, res){
    const id = Number(req.params.id)
    const alumno = alumnos.find(a => a.id === id)
    if (!alumno){
        res.status(404).jason({
            mensaje: "Alumno no encontrado"
        })
    }
    const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id)
    alumnos.length = 0
    alumnos.push(...alumnosActualizados)
    res.json({mensaje: "Alumno eliminado correctamente"})
}

module.exports = {obtenerAlumnos,obtenerAlumno,crearAlumno,actualizarAlumno,eliminarAlumno}