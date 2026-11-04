const Materia = require("../models/Materia")


async function obtenerMaterias(req, res){  //Ruta donde se tomara la informacion  //req = request/pregunta/solicitud, res = respond/responder
    try{
        const materias = await Materia.find()
        res.json(materias)
    } catch(error){
        manejarError(error, res)
    }
}

async function obtenerMateria(req, res){
    try{
        const materia = await Materia.findOne ({codigo: String(req.params.codigo)})
        if (!materia) {
            return res.status(404).json({
                mensaje: "Materia no encontrada"
            })
        }
        res.json(materia)
    } catch(error){
        manejarError(error, res)
    }
}

async function crearMateria(req, res){
    const {codigo, nombre, descripcion, cargaHoraria, estado} = req.body
    if (!codigo || !nombre || !cargaHoraria || !estado){
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        })
    }
    if (typeof nombre !== "string"){
        return res.status(400).json({
            mensaje: "El nombre debe ser un texto"
        })
    }

    if (typeof descripcion !== "string" || descripcion.trim() === ""){
        return res.status(400).json({
            mensaje: "La descripcion no puede tener unicamente espacios en blanco"
        })
    }

    if (typeof cargaHoraria !== "number" || cargaHoraria <= 0 || !Number.isInteger(cargaHoraria)){
        return res.status(400).json({
            mensaje: "La carga horaria debe ser un numero entero mayor a cero"
        })
    }

    if (estado !== "activa" && estado !== "inactiva"){
        return res.status(400).json({
            mensaje: "El estado debe ser 'activa' o 'inactiva'"
        })
    }

    if (typeof codigo !== "string"){
    return res.status(400).json({
        mensaje: "El codigo debe ser un texto"
    })
    }

    const existe = await Materia.findOne({codigo: codigo.trim()})
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
    const {codigo, nombre, descripcion, cargaHoraria, estado} = req.body
    const materia = await Materia.findOneAndUpdate(
        {codigo: String(req.params.codigo)},
        {codigo, nombre, descripcion, cargaHoraria, estado},
        {returnDocument: "after"}
    )
    if (!materia){
        return res.status(404).json({
            mensaje: "Materia no encontrada"
        })
    }
    res.json(materia)
}

async function eliminarMateria(req, res){
    const materia = await Materia.findOneAndDelete(
        {codigo: String(req.params.codigo)}
    )
    if (!materia){
        return res.status(404).json({
            mensaje: "Materia no encontrada"
            
        })
    }
    res.json({mensaje: "Materia eliminada correctamente"})
}

module.exports = {obtenerMaterias,obtenerMateria,crearMateria,actualizarMateria,eliminarMateria}