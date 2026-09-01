const express  = require ("express")
const { obtenerDocentes } = require("../controllers/docentes.controller")
const router = express.Router()

router.get("/", obtenerDocentes) 

router.get("/docentes/:id", (req, res) => {
    const id = Number(req.params.id)
    const docente = docentes.find(d => d.id === id)   // ahora "docentes" refiere al array de arriba
    res.json(docente)
})

router.post("/", (req, res) => {
    const nuevoDocente = req.body
    docentes.push(nuevoDocente)
    res.json({mensaje: "Docente registrado correctamente"})
})

router.put("/:id", (req, res) =>{
    const id = Number(req.params.id)
    const docente = docentes.find(docente => docente.id === id) //compara docente id con el id del params
    docente.id = req.body.id
    docente.nombre = req.body.nombre
    docente.carrera = req.body.carrera
    res.json({mensaje: "Docente actualizado correctamente"})
})

router.delete("/:id", (req, res) =>{
    const id = Number(req.params.id)
    docentes = docentes.filter(docente => docente.id !== id)
    res.json({mensaje: "Docente eliminado correctamente"})
})

module.export = router