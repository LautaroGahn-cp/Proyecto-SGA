const mongoose = require("mongoose") 

const docenteSchema = new mongoose.Schema({ 
    codigo: {
        type: String,
        unique: true 
    },
    nombre: String,
    descripcion: String,
    cargaHoraria: Number,
    estado: String
},
{ 
    versionKey: false 
}
)

const Materia = mongoose.model("Materia", docenteSchema) 

module.exports = Materia