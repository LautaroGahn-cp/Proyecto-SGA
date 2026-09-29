const Docente = require ("../models/Docente")

async function obtenerDocentes(req, res){  //Ruta donde se tomara la informacion  //req = request/pregunta/solicitud, res = respond/responder
    const docentes = await Docente.find()
    res.json(docentes)
}

async function obtenerDocente(req, res){
    const docente = await Docente.findOne ({legajo: Number(req.params.id)})
    if (!docente) {
        return res.status(404).json({
            mensaje: "Docente no encontrado"
        })
    }
    res.json(docente)
} 

async function crearDocente(req, res){
    const {legajo, Nombre, Especialidad, Correo} = req.body
    if (!legajo || !Nombre || !Especialidad || !Correo){
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }
    if (typeof Nombre != "string"){
        return res.status(400).json({
            mensaje: "El noombre debe ser un texto"
        })
    }
    if (typeof legajo !== "number"){
    return res.status(400).json({
        mensaje: "El legajo debe ser un numero"
    })
    }
    const existe = await Docente.findOne({
        legajo
    })
    if (existe){
        return res.status(400).json({
            mensaje: "El docente ya existe"
        })
    }
    const nuevoDocente = await Docente.create({
        legajo,
        Nombre,
        Especialidad,
        Correo
    })
    res.status(201).json(nuevoDocente)
}

async function actualizarDocente(req, res){
    const {Nombre, Especialidad, Correo} = req.body
    const docente = await Docente.findOneAndUpdate(
        {legajo: Number(req.params.id)},
        {Nombre, Especialidad, Correo},
        {returnDocument: "after"}
    )
    if (!docente){
        res.status(404).jason({
            mensaje: "Docente no encontrado"
        })
    }
    res.json(docente)
}

async function eliminarDocente(req, res){
    const docente = await Docente.findOneAndDelete(
        {legajo: Number(req.params.id)}
    )
    if (!docente){
        res.status(404).jason({
            mensaje: "Docente no encontrado"
        })
    }
    res.json({mensaje: "Docente eliminado correctamente"})
}

module.exports = {obtenerDocentes,obtenerDocente,crearDocente,actualizarDocente,eliminarDocente}