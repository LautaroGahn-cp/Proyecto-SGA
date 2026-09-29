const mongoose = require("mongoose")

const docenteSchema = new mongoose.Schema({
    legajo: { 
        type: Number,
        unique: true
    },
    Nombre: String,
    Especialidad: String,
    Correo: String
}, 
{
    versionKey: false
})

const Docente = mongoose.model("Docente", docenteSchema)

module.exports = Docente