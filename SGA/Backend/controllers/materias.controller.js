const Materia = require ("../models/Materia")

async function obtenerMaterias(req, res){  //Ruta donde se tomara la informacion  //req = request/pregunta/solicitud, res = respond/responder
    const materias = await Materia.find()
    res.json(materias)
}

async function obtenerMateria(req, res){
    const materia = await Materia.findOne ({codigo: Number(req.params.id)})
    if (!materia) {
        return res.status(404).json({
            mensaje: "Materia no encontrado"
        })
    }
    res.json(Materia)
} 

async function crearMateria(req, res){
    const {codigo, nombre, descripcion, cargaHoraria} = req.body
    if (!codigo || !nombre || !descripcion || !cargaHoraria || !estado){
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }
    if (typeof nombre != "string"){
        return res.status(400).json({
            mensaje: "El nombre debe ser un texto"
        })
    }
    if (typeof codigo !== "string"){
    return res.status(400).json({
        mensaje: "El codigo debe ser un numero"
    })
    }
    const existe = await Materia.findOne({
        codigo
    })
    if (existe){
        return res.status(400).json({
            mensaje: "La Materia ya existe"
        })
    }
    const nuevaMateria = await Materia.create({
        codigo,
        nombre,
        descripcion,
        cargaHoraria,
        estado
    })
    res.status(201).json(nuevaMateria)
}

async function actualizarMateria(req, res){
    const {nombre, descripcion, cargaHoraria} = req.body
    const materia = await Materia.findOneAndUpdate(
        {codigo: Number(req.params.id)},
        {nombre, descripcion, cargaHoraria},
        {returnDocument: "after"}
    )
    if (!materia){
        res.status(404).jason({
            mensaje: "Materia no encontrada"
        })
    }
    res.json(materia)
}

async function eliminarMateria(req, res){
    const materia = await Materia.findOneAndDelete(
        {codigo: Number(req.params.id)}
    )
    if (!materia){
        res.status(404).jason({
            mensaje: "Materia no encontrada"
        })
    }
    res.json({mensaje: "Materia eliminada correctamente"})
}

module.exports = {obtenerMaterias,obtenerMateria,crearMateria,actualizarMateria,eliminarMateria}